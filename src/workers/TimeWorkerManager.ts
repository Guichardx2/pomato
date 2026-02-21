let instace: TimeWorkerManager | null = null;

export default class TimeWorkerManager {
  private worker: Worker;

  private constructor() {
    this.worker = new Worker(new URL("./timerWorker.js", import.meta.url));
  }

  static getInstance() {
    if (!instace) {
        instace = new TimeWorkerManager();
    }
    return instace;
  }

    postMessage(message: any) {
        this.worker.postMessage(message);
    }

    onmessage(callback: (message: any) => void) {
        this.worker.onmessage = callback;
    }

    terminate() {
        this.worker.terminate();
        instace = null;
    }
}