import { Component, EventEmitter, Input, Output } from '@angular/core';
import { todos } from 'src/app/todos';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {

  @Input() todo!: todos;
  @Output() TodoDelete: EventEmitter<todos> = new EventEmitter();

  onDelClick(todo : todos){
    this.TodoDelete.emit(todo);
    console.log("on del click triggered")
  }

}
