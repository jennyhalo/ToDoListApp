import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss'],
})
export class ToDoListPage implements OnInit {

 todos: Todo[];

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

  toggleDone (id) {
    this.todos.map((value, index) => {
      if (index == id) value.completed = !value.completed;
      
      return value;
    })
  }

}
