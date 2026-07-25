import type { TaskModel } from "../models/task/TaskModel";

export function getTaskStatus(task: TaskModel, activeTask: TaskModel | null) {
    if (task.completeDate) {
        return "Concluída";
    }

    if (task.interruptDate) {
        return "Interrompida";
    }

    if (task.id === activeTask?.id) {
        return "Em progresso";
    }
    return "Abandonada";

}