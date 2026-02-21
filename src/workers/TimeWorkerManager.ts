import type { TaskStateModel } from "../models/task/TaskStateModel";

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

    postMessage(message: TaskStateModel) {
        this.worker.postMessage(message);
    }

    onmessage(callback: (message: MessageEvent) => void) {
        this.worker.onmessage = callback;
    }

    terminate() {
        this.worker.terminate();
        instace = null;
    }
}