import { useEffect, useState } from "react";
import type { TaskStateModel } from "../../models/task/TaskStateModel";
import { TaskContext } from "../../contexts/task-context/TaskContext";
import { initialTaskState } from "../../constants/task-constants/initialTaskState";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
    const [state, setState] = useState<TaskStateModel>(initialTaskState);

    useEffect(() => {
      console.log(state)
    }, [state]);

    return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
};