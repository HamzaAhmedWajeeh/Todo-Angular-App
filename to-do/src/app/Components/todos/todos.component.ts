import { Component, OnInit } from '@angular/core';
import { todos } from 'src/app/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{

  todos: todos[] = [];

  constructor (){
    this.todos = [{
      sno: 1,
      title: 'Work1',
      description: 'this is description1',
      active: true
    },
    {
      sno: 2,
      title: 'Work2',
      description: 'this is description2',
      active: true
    },
    {
      sno: 3,
      title: 'Work3',
      description: 'this is description3',
      active: true
    },
  ];
  }

  ngOnInit(): void{

  }

  deleteTodo(todo:todos){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }
  addTodo(todo:todos){
    console.log(todo);
    this.todos.push(todo);
  }


}
