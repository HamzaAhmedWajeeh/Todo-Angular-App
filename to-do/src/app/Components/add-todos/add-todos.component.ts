import { Component, EventEmitter, Output } from '@angular/core';
import { todos } from 'src/app/todos';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent {


  title!: string;
  description!: string;
  @Output() TodoAdd: EventEmitter<todos> = new EventEmitter();
  onSubmit(){
    const todo = {
      sno: 8,
      title: this.title,
      description: this.description,
      active: true
    }
    this.TodoAdd.emit(todo);
  }

}
