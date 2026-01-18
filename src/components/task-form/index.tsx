import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import Cycles from "../cycles";
import Button from "../default-button";
import Input from "../default-input";
import styles from "./styles.module.css";
import { useRef } from "react";
import type { TaskModel } from "../../models/task/TaskModel";
import useTaskContext from "../../hooks/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

const TaskForm = () => {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(e: React.FormEvent) {
    e.preventDefault();

    if (!taskNameInput.current) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) return;
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleInterruptTask() {
    setState((prevState) => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: prevState.tasks.map((task) => {
          if (prevState.activeTask?.id === task.id) {
            return {
              ...task,
              interruptDate: Date.now(),
            };
          }
          return task;
        }),
      };
    });
  }

  return (
    <form onSubmit={handleCreateNewTask} action="" className={styles.taskForm}>
      <div className={styles.taskFormRow}>
        <Input
          ref={taskNameInput}
          type="text"
          id="task"
          labelText="Tarefa"
          placeholder="Digite algo"
          disabled={!!state.activeTask}
        />
      </div>

      <div className={styles.taskFormRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      {state.activeTask && (
        <div className={styles.taskFormRow}>
          <Cycles />
        </div>
      )}

      <div className={styles.taskFormRow}>
        {!state.activeTask && (
          <Button
            type="submit"
            key="submit"
            aria-label="Iniciar nova tarefa"
            icon={<PlayCircleIcon />}
            color="green"
            title="Iniciar nova tarefa"
          />
        )}

        {!!state.activeTask && (
          <Button
            type="button"
            key="interrupt"
            aria-label="Interromper tarefa atual"
            onClick={handleInterruptTask}
            icon={<StopCircleIcon />}
            color="red"
            title="Interromper tarefa atual"
          />
        )}
      </div>
    </form>
  );
};

export default TaskForm;
