// you should call stop() when finished using the RateLimiter
export class RateLimiter {
  // Avoid multiple concurrent processQueue runs
  private started = false;
  private tokensAvailable: number;
  private tokenGenerationIntervalId: ReturnType<typeof setInterval>;

  // Queue stores pending work as functions that need execution
  private queue: Array<{
    fn: () => Promise<any>;
    resolve: (value: any) => void;
    reject: (reason?: any) => void;
  }> = [];

  constructor(
    private requestsPerInterval: number,
    private intervalMs: number
  ) {
    this.tokensAvailable = requestsPerInterval;
    this.tokenGenerationIntervalId = setInterval(() => {
      this.generateToken();
    }, this.intervalMs / this.requestsPerInterval);
  }

  private async processQueue() {
    while (this.tokensAvailable > 0 && this.queue.length > 0) {
      const item = this.queue.shift();
      if (!item) return;

      try {
        const result = item.fn();
        item.resolve(result);
      } catch (error) {
        item.reject(error);
      }
      this.tokensAvailable--;
    }

    this.started = false;
  }

  public stop() {
    this.started = false;
    this.queue = [];
    clearInterval(this.tokenGenerationIntervalId);
  }

  private generateToken() {
    if (this.tokensAvailable < this.requestsPerInterval) {
      this.tokensAvailable++;
    }
    if (!this.started) {
      this.processQueue();
    }
  }

  private startProcessing() {
    if (this.started || this.tokensAvailable < 1) return;
    this.started = true;
    this.processQueue();
  }

  /**
   * Execute a function with rate limiting.
   *
   * @param fn - Async function to execute with rate limiting
   * @returns Promise that resolves with the function's result
   *
   * @example Blocking usage - waits for each request to complete
   * ```ts
   * for (let i = 0; i < 100; i++) {
   *   const result = await rateLimiter.execute(() => fetch(...));
   * }
   * rateLimiter.stop();
   * ```
   *
   * @example Non-blocking usage - queues multiple requests in parallel
   * Be careful not to stop the rate limiter before all requests complete
   * ```ts
   * const promises = [];
   * for (let i = 0; i < 100; i++) {
   *   const promise = rateLimiter.execute(() => fetch(...)).then((result) => {
   *     // handle result
   *   });
   *   promises.push(promise);
   * }
   * await Promise.all(promises);
   * rateLimiter.stop();
   * ```
   */

  public execute<T>(fn: () => Promise<T>): Promise<T> {
    const promise = new Promise<T>((resolve, reject) => {
      // Queue the function along with its resolve/reject handlers
      this.queue.push({ fn, resolve, reject });
    });

    this.startProcessing();

    return promise;
  }
}
