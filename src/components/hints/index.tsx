import useTaskContext from "../../hooks/useTaskContext";
import styles from "./styles.module.css";

type HintsProps = {
    nextCycleType: "workTime" | "shortBreakTime" | "longBreakTime"
};
const Hints = ({ nextCycleType }: HintsProps) => {
    const { state } = useTaskContext();
  const hintsForTasks = {
    activeTask: {
      workTime: `Foque por ${state.config.workTime}min`,
      shortBreakTime: `Descanse por ${state.config.shortBreakTime}min`,
      longBreakTime: "Descanso longo, aproveite para relaxar bastante",
    },
    noActiveTask: {
      workTime: `Próximo ciclo é de ${state.config.workTime}min`,
      shortBreakTime: `Próximo descanso é de ${state.config.shortBreakTime}min`,
      longBreakTime:
        "Próximo descanso será longo, aproveite para relaxar bastante",
    },
  };
  return (
    <>
      {!!state.activeTask && (
        <span className={styles.hint}>{hintsForTasks.activeTask[state.activeTask.type]}</span>
      )}
      {!state.activeTask && (
        <span className={styles.hint}>{hintsForTasks.noActiveTask[nextCycleType]}</span>
      )}
    </>
  );
};

export default Hints;
