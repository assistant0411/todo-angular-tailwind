import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Todo, TodoWhen } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() when?: TodoWhen;
  editing: Todo;
  items: Todo[];

  constructor(public todoService: TodoService) { }
  
  ngOnInit(): void {
    this.items = this.todoService.find(this.when);
  }

  add(todoName: string): void {
    this.items.push(
      this.todoService.add(todoName, this.when)
    );
  }

  remove(todo: Todo): void {
    this.items.splice(this.items.indexOf(todo), 1);
    this.todoService.remove(todo);
  }
  
  startEditing(todo: Todo): void {
    this.editing = todo;
  }

  stopEditing(): void {
    this.editing = null;
  }

  update(todo: Todo, todoName: string): void {
    this.todoService.update(todo, todoName);
  }

  toggle(todo: Todo): void {
    this.todoService.toggle(todo);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
