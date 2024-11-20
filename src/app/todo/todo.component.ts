import { Component, OnInit, OnChanges, OnDestroy, AfterContentChecked, AfterContentInit, DoCheck, AfterViewChecked, AfterViewInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  title: string = 'Todo List';
  todos: any[] = [];
  todoTitle: string = '';
  todo: any;
  todoEdit: boolean = false;
  limit: number = 10;
  page: number = 0;
  count: number = 0;

  constructor(private todoService: TodoService) {
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  AddTodo() {
    let count = this.todos.length + 1;
    this.todos.push({ id: count, title: this.todoTitle, completed: false });
    this.todoTitle = '';
  }

  editTodo(todo: any) {
    this.todoTitle = todo.title;
    this.todo = todo;
    this.todoEdit = true;
  }

  update() {
    this.todo.title = this.todoTitle;
    this.todoEdit = false;
    this.todoTitle = '';
    this.todos = [...this.todos];
  }

  ngOnInit() {
    this.todos = [];
    this.getTodos();
  }

  prev() {
    if (this.page > 0) {
      this.page = this.page - this.limit;
      console.log("prev",this.page);
      this.getTodos();

    }

  }
  next() {
    if (this.page < this.count-10) {
      this.page = this.page + this.limit;
      console.log("next",this.page);
      this.getTodos();
    }
  }

  getTodos() {
    this.todoService.getTodos().subscribe((data) => {
      this.count = data.length;
      this.todos = data.splice(this.page, this.limit);
    });
  }
}
