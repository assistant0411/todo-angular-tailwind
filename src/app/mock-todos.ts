import { Todo, TodoWhen } from './todo';

export const TODOS: Todo[] = [
    { name: 'Remember the milk!', completed: true, when: TodoWhen.today },
    { name: 'Save the cheerleader', completed: false, when: TodoWhen.today },
    { name: 'Save the world', completed: false, when: TodoWhen.tomorrow }
];