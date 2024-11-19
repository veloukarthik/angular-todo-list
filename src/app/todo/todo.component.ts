import { Component,OnInit,OnChanges,OnDestroy,AfterContentChecked,AfterContentInit,DoCheck,AfterViewChecked,AfterViewInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    title:string = 'Todo List';
    todos:any[] = [];
    todoTitle:string = '';
    todo:any;
    todoEdit:boolean = false;

    constructor(private todoService:TodoService)
    { 
    }

    removeTodo(index:number)
    {
      this.todos.splice(index, 1);
    }

    AddTodo()
    {
      let count = this.todos.length+1;
      this.todos.push({id:count,title:this.todoTitle,completed:false});
      this.todoTitle = '';
    }

    editTodo(todo:any)
    {
        this.todoTitle = todo.title;
        this.todo = todo;
        this.todoEdit = true;
    }

    update()
    {
      this.todo.title = this.todoTitle;
      this.todoEdit = false;
      this.todoTitle = '';
      this.todos = [...this.todos];
    }

    ngOnInit(){
      this.todos = [];
      this.getTodos();
    }

    getTodos()
    {
        this.todoService.getTodos().subscribe((data) => {
          this.todos = data.splice(0,10);
        });
    }
}
