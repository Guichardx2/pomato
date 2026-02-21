import { useReducer } from "react";
import { TaskContext } from "../../contexts/task-context/TaskContext";
import { initialTaskState } from "../../constants/task-constants/initialTaskState";
import { taskReducer } from "../../reducers/taskReducer";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {

    const [state, dispatch] = useReducer(taskReducer, initialTaskState);

    return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};