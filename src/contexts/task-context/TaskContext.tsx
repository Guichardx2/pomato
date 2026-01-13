import { createContext } from "react";
import type { TaskStateModel } from "../../models/task/TaskStateModel";
import { initialTaskState } from "../../constants/task-constants/initialTaskState";

const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
