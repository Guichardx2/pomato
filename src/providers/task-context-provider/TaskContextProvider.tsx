import { useEffect, useReducer } from "react";
import { TaskContext } from "../../contexts/task-context/TaskContext";
import { initialTaskState } from "../../constants/task-constants/initialTaskState";
import { taskReducer } from "../../reducers/taskReducer";
import TimeWorkerManager from "../../workers/TimeWorkerManager";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const worker = TimeWorkerManager.getInstance();

  worker.onmessage((message) => {
    const countDownSeconds = message.data;

    if (countDownSeconds <= 0) {
      dispatch({ type: "COMPLETE_TASK" });
      worker.terminate();
    } else {
      dispatch({
        type: "COUNT_DOWN",
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      console.log("Nenhuma tarefa ativa. Encerrando o worker.");
      worker.terminate();
    }

    worker.postMessage(state);
  }, [state, worker]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
