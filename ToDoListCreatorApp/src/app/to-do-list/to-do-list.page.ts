import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss'],
})
export class ToDoListPage implements OnInit {

 todos: Todo[];

 todoInput: string = "";

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    this.todos = [
      {
        content: 'Eat Fresh food',
        completed: false
      },
      {
        content: 'Go to the toilet',
        completed: false
      },
    ]
  }

  toggleDone (id:number) {
    this.todos.map((value, i) => {
      if (i == id) value.completed = !value.completed;
      
      return value;
    })
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((value, i) => i !== id);
  }

  addTodo () {
    this.todos.push({
      content: this.todoInput,
      completed: false
    });

    this.todoInput = "";
  }

}
