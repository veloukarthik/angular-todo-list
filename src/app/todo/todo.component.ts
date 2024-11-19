import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
    title:string = 'Todo List';
    todos:string[] = ['Todo 1', 'Todo 2', 'Todo 3'];
    constructor()
    {

    }

    removeTodo(index:number)
    {
      this.todos.splice(index, 1);
    }

    AddTodo()
    {
      let count = this.todos.length+1;
      this.todos.push('Todo '+count);
    }
}
