import type { TaskModel } from "../models/task/TaskModel";

export const TaskActionTypes = {
  START_TASK: "START_TASK",
  INTERRUPT_TASK: "INTERRUPT_TASK",
  COMPLETE_TASK: "COMPLETE_TASK",
  RESET_STATE: "RESET_STATE",
  SET_SECONDS_REMAINING: "SET_SECONDS_REMAINING",
} as const;

export type TaskActionsWithPayload =
  | {
    type: "START_TASK";
    payload: TaskModel;
  }


export type TaskActionsWithoutPayload =
  | {
    type: "RESET_STATE";
  }
  | {
    type: "INTERRUPT_TASK";
  };

export type TaskActionModel = TaskActionsWithPayload | TaskActionsWithoutPayload;