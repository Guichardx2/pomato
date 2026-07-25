import DefaultTemplate from "../../templates/DefaultTemplate";
import Container from "../../components/container";
import Heading from "../../components/heading";
import Button from "../../components/default-button";
import { TrashIcon } from "lucide-react";
import useTaskContext from "../../hooks/useTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { sortTasks, type SortTasksOptions } from "../../utils/sortTasks";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { toaster } from "../../adapters/toaster";
import { TaskActionTypes } from "../../actions/taskActions";
import { setPageTitle } from "../../utils/setPageTitle";
import { siteConfig } from "../../constants/siteConfig";
function History() {
  const { state, dispatch } = useTaskContext();
  const [confirmClearHistory, setConfirmClearHistory] = useState(false);
  const hasTasks = state.tasks.length > 0;
  const [sortTasksOptions, setSortTaskOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: "startDate",
        direction: "desc",
      };
    },
  );

  function handleSortTasks({ field }: Pick<SortTasksOptions, "field">) {
    const newDirection = sortTasksOptions.direction === "desc" ? "asc" : "desc";

    setSortTaskOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTasksOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    });
  }

  function handleDeleteAllHistory() {
    toaster.dismiss();
    toaster.confirm(
      "Tem certeza que deseja apagar todo o histórico?",
      (confirmation) => {
        if (confirmation) {
          setConfirmClearHistory(confirmation);
        }
      }
    );
  }

  useEffect(() => {
    setSortTaskOptions((prevState) => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      }),
    }));
  }, [state.tasks]);

  useEffect(() => {
    if (!confirmClearHistory) return;

    dispatch({ type: TaskActionTypes.RESET_STATE });
    setConfirmClearHistory(false);
  }, [confirmClearHistory, dispatch]);

  useEffect(() => {
    setPageTitle(`Histórico | ${siteConfig.name}`);
    return () => {
      toaster.dismiss();
    }
  }, [])
    
  return (
    <>
      <DefaultTemplate>
        <Container>
          <Heading>
            <span>Histórico</span>
            {hasTasks && (
              <span className={styles.buttonContainer}>
                <Button
                  icon={<TrashIcon />}
                  aria-label="Apagar todo o histórico"
                  title="Apagar histórico"
                  color="red"
                  onClick={handleDeleteAllHistory}
                />
              </span>
            )}
          </Heading>
        </Container>

        <Container>
          {hasTasks && (
            <div className={styles.responsiveTable}>
              <table>
                <thead>
                  <tr>
                    <th
                      onClick={() => handleSortTasks({ field: "name" })}
                      className={styles.thSort}
                    >
                      Tarefa ↕
                    </th>
                    <th
                      onClick={() => handleSortTasks({ field: "duration" })}
                      className={styles.thSort}
                    >
                      Duração ↕
                    </th>
                    <th
                      onClick={() => handleSortTasks({ field: "startDate" })}
                      className={styles.thSort}
                    >
                      Data ↕
                    </th>
                    <th>Status</th>
                    <th>Tipo</th>
                  </tr>
                </thead>

                <tbody>
                  {sortTasksOptions.tasks.map((task) => {
                    const taskType = {
                      workTime: "Foco",
                      shortBreakTime: "Descanso curto",
                      longBreakTime: "Descanso longo",
                    };

                    return (
                      <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>{task.duration}</td>
                        <td>{formatDate(task.startDate)}</td>
                        <td>{getTaskStatus(task, state.activeTask)}</td>
                        <td>{taskType[task.type]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          {!hasTasks && (
            <p style={{ textAlign: "center" }}>
              Ainda não existem tarefas criadas...
            </p>
          )}
        </Container>
      </DefaultTemplate>
    </>
  );
}

export default History;
