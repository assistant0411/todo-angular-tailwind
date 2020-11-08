export interface Todo {
    name: string,
    completed: boolean,
    when: TodoWhen
}

export enum TodoWhen {
    today = 1,
    tomorrow
}