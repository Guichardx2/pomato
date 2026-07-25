import type { TaskModel } from "../models/task/TaskModel";
import type { TaskStateModel } from "../models/task/TaskStateModel";

export const TaskActionTypes = {
  START_TASK: "START_TASK",
  INTERRUPT_TASK: "INTERRUPT_TASK",
  COMPLETE_TASK: "COMPLETE_TASK",
  COUNT_DOWN: "COUNT_DOWN",
  RESET_STATE: "RESET_STATE",
  SET_SECONDS_REMAINING: "SET_SECONDS_REMAINING",
  CHANGE_SETTINGS: "CHANGE_SETTINGS",
} as const;

export type TaskActionsWithPayload =
  | {
    type: "START_TASK";
    payload: TaskModel;
  }
  | {
    type: "COUNT_DOWN";
    payload: Pick<TaskStateModel, "secondsRemaining">;
  }
  | {
    type: "CHANGE_SETTINGS";
    payload: Pick<TaskStateModel, "config">;
  };


export type TaskActionsWithoutPayload =
  | {
    type: "RESET_STATE";
  }
  | {
    type: "INTERRUPT_TASK";
  }
  | {
    type: "COMPLETE_TASK";
  };

export type TaskActionModel = TaskActionsWithPayload | TaskActionsWithoutPayload;