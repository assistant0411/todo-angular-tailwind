import { Injectable } from '@angular/core';
import { Todo, TodoWhen } from './todo';
import { TODOS } from './mock-todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  items: Todo[];

  constructor() {
    this.items = TODOS;
  }

  find(when?: TodoWhen): Todo[] {
    if (when) {
      return this.items.filter(item => item.when === when);
    }

    return this.items;
  }

  add(todoName: string, todoWhen?: TodoWhen): Todo {
    let item = {
      name: todoName,
      completed: false,
      when: todoWhen
    };

    this.items.push(item);

    return item;
  }

  update(todo: Todo, todoName: string): void {
    todo.name = todoName;
  }

  toggle(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  remove(todo: Todo): void {
    this.items.splice(this.items.indexOf(todo), 1);
  }
}
