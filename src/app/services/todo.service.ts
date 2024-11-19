import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HttpClientModule,
   HttpClient, 
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
