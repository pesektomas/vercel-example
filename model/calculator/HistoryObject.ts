export enum HistoryOperation {
    SET_VALUE_A = 'SET VALUE A',
    SET_VALUE_B = 'SET VALUE B',
    SET_OPERATION = 'SET OPERATION',
}
export interface HistoryObject {
    operation: HistoryOperation,
    value: string
}