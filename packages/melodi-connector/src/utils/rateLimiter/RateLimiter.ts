// you should call stop() when finished using the RateLimiter
// turns out the api doesn't seem to be a rolling window so, when we're out of tokens, we need to pause for the full interval

// previous implementation used a generateToken interval
export class RateLimiter {
  // Avoid multiple concurrent processQueue runs
  private started = false;
  private tokensAvailable: number;

  // Queue stores pending work as functions that need execution
  private queue: Array<{
    fn: () => Promise<any>;
    resolve: (value: any) => void;
    reject: (reason?: any) => void;
  }> = [];
  private stopped: boolean = false;

  constructor(
    private requestsPerInterval: number = 20,
    private intervalMs: number = 60 * 1000
  ) {
    this.tokensAvailable = requestsPerInterval;
  }

  private async processQueue() {
    if (this.stopped) {
      /*       console.log("RateLimiter has been stopped, not processing queue"); */
      return;
    }
    while (this.queue.length > 0) {
      if (this.tokensAvailable < 1) {
        /*         console.log(
          "No tokens available, waiting for new tokens before continuing"
        ); */

        this.started = false;
        this.waitForNewTokens();
        return;
      }
      const item = this.queue.shift();
      if (!item) return;
      /* 
      console.log(`Processing queued request, ${this.queue.length} remaining`);
      console.log(`${this.tokensAvailable} tokens available`); */

      try {
        const result = await item.fn();
        item.resolve(result);
        this.tokensAvailable--;
      } catch (error) {
        /* 
        console.log("!!!!Error executing fetch, probably rate limited:", error); */

        this.started = false;

        // Stop and restart the interval to avoid rapid retries
        this.tokensAvailable = 0;
        this.waitForNewTokens();

        // Put it back in the queue to retry later
        this.queue.unshift(item);
        return;
      }
    }

    /*     console.log("RateLimiter queue is empty, stopping processing"); */

    this.started = false;
  }

  public stop() {
    this.started = false;
    this.stopped = true;
    this.queue = [];
  }

  private async waitForNewTokens() {
    // Poll the api every 10s
    const intervalId = setInterval(async () => {
      const res = await fetch("https://api.insee.fr/melodi/data");
      console.log("Polled API to check rate limit status");
      if (res.status === 429) {
        console.log("Still rate limited");
      } else {
        this.tokensAvailable = this.requestsPerInterval;
        clearInterval(intervalId);
        console.log("Tokens replenished, resuming queue processing");
        this.startProcessing();
      }
    }, 10000);
  }

  private startProcessing() {
    if (this.started) return;
    /*     console.log("Starting RateLimiter processing"); */
    this.started = true;
    this.processQueue();
  }

  public execute<T>(fn: () => Promise<T>): Promise<T> {
    /*     console.log("Queueing function in RateLimiter"); */
    const promise = new Promise<T>((resolve, reject) => {
      // Queue the function along with its resolve/reject handlers
      this.queue.push({ fn, resolve, reject });
    });

    this.startProcessing();

    return promise;
  }
}
