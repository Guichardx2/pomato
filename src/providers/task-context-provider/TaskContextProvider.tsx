import { useEffect, useReducer, useRef } from "react";
import { TaskContext } from "../../contexts/task-context/TaskContext";
import { initialTaskState } from "../../constants/task-constants/initialTaskState";
import { taskReducer } from "../../reducers/taskReducer";
import TimeWorkerManager from "../../workers/TimeWorkerManager";
import { loadBeep } from "../../utils/loadBeep";
import type { TaskStateModel } from "../../models/task/TaskStateModel";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
    const storedState = localStorage.getItem("state");

    if (!storedState) return initialTaskState;
    
    const parsedStorageState = JSON.parse(storedState) as TaskStateModel;
    return {
      ...parsedStorageState,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsRemaining: "00:00",
    };
  });
  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

  const worker = TimeWorkerManager.getInstance();

  worker.onmessage((message) => {
    const countDownSeconds = message.data;

    if (countDownSeconds <= 0) {
      if (playBeepRef.current) {
        playBeepRef.current();
        playBeepRef.current = null;
      }
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
    localStorage.setItem("state", JSON.stringify(state));

    if (!state.activeTask) {
      worker.terminate();
    }
    document.title = `${state.formattedSecondsRemaining} | Pomato Pomodoro `;
    worker.postMessage(state);
  }, [state, worker]);

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
