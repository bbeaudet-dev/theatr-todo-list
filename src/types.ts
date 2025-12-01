export interface Task {
    id: string,
    content: string,
    isCompleted: boolean,
    dateCreated: number,
    dateCompleted: number[]
}