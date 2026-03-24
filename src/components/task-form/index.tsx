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
import Hints from "../hints";
import { toaster } from "../../adapters/toaster";

const TaskForm = () => {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || "";

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(e: React.FormEvent) {
    e.preventDefault();
    toaster.dismiss();

    if (!taskNameInput.current) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      toaster.warning("Digite o nome da tarefa!");
      return
    };
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: "START_TASK", payload: newTask });
    toaster.success("Tarefa iniciada!");
  }

  function handleInterruptTask() {
    toaster.dismiss();
    toaster.error("Tarefa interrompida!");
    dispatch({ type: "INTERRUPT_TASK" });
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
          defaultValue={lastTaskName}
        />
      </div>

      <div className={styles.taskFormRow}>
        <Hints nextCycleType={nextCycleType} />
      </div>

      {state.currentCycle > 0 && (
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
