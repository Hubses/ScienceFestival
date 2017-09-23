import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { TodosService } from '../services/todos.service';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import * as posts from '../actions/todos';
import { Todo } from '../models/todo';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TodosEffectsService {
  @Effect()
  loadPosts$: Observable<Action> = this.actions$
    .ofType(posts.ActionTypes.LOAD)
    .switchMap((action: posts.LoadAction) => this.postsService.loadTodos(action.payload))
    .map((payload: Todo[]) => new posts.LoadSuccessAction(payload))
    .catch(() => of(new posts.LoadFailAction('Failed to load todos')));

  @Effect({ dispatch: false })
  loadFail$: Observable<Action> = this.actions$
    .ofType(posts.ActionTypes.LOAD_FAIL)
    .do((action: posts.LoadFailAction) => console.error(action.payload));

  constructor(private actions$: Actions,
              private postsService: TodosService) {}
}
