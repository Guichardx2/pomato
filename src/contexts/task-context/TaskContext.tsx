import React, { createContext } from "react";
import type { TaskStateModel } from "../../models/task/TaskStateModel";
import type { TaskActionModel } from "../../actions/taskActions";
import { initialTaskState } from "../../constants/task-constants/initialTaskState";

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue: TaskContextProps = {
  state: initialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
