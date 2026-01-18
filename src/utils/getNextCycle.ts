export function getNextCycle(currentCycle: number ): number {
    return currentCycle < 8 ? currentCycle + 1 : 1;
}