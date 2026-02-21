import useTaskContext from "../../hooks/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./styles.module.css";

const Cycles = () => {
  const { state } = useTaskContext();

  const cycleDescriptionMap = {
    workTime: "Ciclo de foco de trabalho",
    shortBreakTime: "Ciclo de intervalo curto",
    longBreakTime: "Ciclo de intervalo longo",
  };
  const cycleStep = Array.from({ length: state.currentCycle });
  
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      <div className={styles.cycleDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={`${nextCycleType}-${nextCycle}`}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={cycleDescriptionMap[nextCycleType]}
              title={cycleDescriptionMap[nextCycleType]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cycles;
