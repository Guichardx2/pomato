import { toaster } from "../../../adapters/toaster";

export function inputsValidation(workTime: number, shortBreakTime: number, longBreakTime: number) {
    const errorMessages = []

    if (!workTime || !shortBreakTime || !longBreakTime) {
        errorMessages.push("Todos os campos devem ser preenchidos!");
    }

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
        errorMessages.push("Digite apenass números para todos os campos!");
    }

    if (workTime < 1 || workTime > 99) {
        errorMessages.push("Os valores devem ser entre 1 e 99 para foco!");
    }
    if (shortBreakTime < 1 || shortBreakTime > 30) {
        errorMessages.push("Os valores devem ser entre 1 e 30 para descanso curto!");
    }
    if (longBreakTime < 1 || longBreakTime > 60) {
        errorMessages.push("Os valores devem ser entre 1 e 60 para descanso longo!");
    }

    if (errorMessages.length > 0) {
        errorMessages.forEach(element => {
            toaster.error(element);
        });
        return;
    };
}; 