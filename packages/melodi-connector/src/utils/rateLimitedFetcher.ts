export class RateLimitedFetcher {
  private requestsQueue: Array<() => void> = [];
  /**
   * number of requests that can still be started in the current interval
   */
  private tokensRemaining: number;
  private intervalId: ReturnType<typeof setInterval>;

  constructor(
    private maxRequestsPerInterval: number,
    private intervalMs: number
  ) {
    if (this.maxRequestsPerInterval <= 0) {
      throw new Error("maxRequestsPerInterval must be > 0");
    }
    if (this.intervalMs <= 0) {
      throw new Error("intervalMs must be > 0");
    }

    this.tokensRemaining = this.maxRequestsPerInterval;

    this.intervalId = setInterval(() => {
      // refill tokens at each interval and attempt to process queued requests
      this.tokensRemaining = this.maxRequestsPerInterval;
      this.processQueue();
    }, this.intervalMs);
  }

  private processQueue() {
    while (this.tokensRemaining > 0 && this.requestsQueue.length > 0) {
      const request = this.requestsQueue.shift();

      if (request) {
        this.tokensRemaining--;
        console.log(
          `Processing queued request. Tokens remaining: ${this.tokensRemaining}`
        );
        request();
      }
      
    }
  }

  public fetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
    return new Promise<Response>((resolve, reject) => {
      const executeFetch = () => {
        console.log(
          `Starting request to ${input}. Tokens remaining: ${this.tokensRemaining}`
        );
        // token already consumed when queued request is started
        fetch(input, init)
          .then((response) => resolve(response))
          .catch((error) => reject(error))
          .finally(() => {
            // when a request finishes we do not "return" a token for the
            // current interval — tokens are replenished only on the interval tick.
            // We still try to process the queue in case there are tokens left
            // (for example if the interval refilled tokens while some requests
            // were still running).
            this.processQueue();
          });
      };

      this.requestsQueue.push(executeFetch);
      // attempt immediate processing (will only start requests if tokens remain)
      this.processQueue();
    });
  }

  public stop() {
    clearInterval(this.intervalId);
  }
}
