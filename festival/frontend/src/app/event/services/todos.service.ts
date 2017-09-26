import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../models/todo';
import { environment } from '../../../environments/environment';

@Injectable()
export class TodosService {
  constructor(private http: Http) {}

  loadTodos(userId: number): Observable<Todo[]> {
    return this.http.get(`${environment.baseApiUrl}/todos?userId=${userId}`)
      .map(res => res.json());
  }
}
