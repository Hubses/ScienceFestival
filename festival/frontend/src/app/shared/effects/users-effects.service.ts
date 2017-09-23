import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { UsersService } from '../services/users.service';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import * as users from '../actions/users';
import { User } from '../models/user';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UsersEffectsService {
  @Effect()
  loadUsers$ = this.actions$
    .ofType(users.ActionTypes.LOAD)
    .switchMap(() => this.usersService.loadUsers())
    .map((payload: User[]) => new users.LoadSuccessAction(payload))
    .catch(() => of(new users.LoadFailAction('Failed to load users')));

  @Effect({ dispatch: false })
  loadFail$: Observable<Action> = this.actions$
    .ofType(users.ActionTypes.LOAD_FAIL)
    .do((action: users.LoadFailAction) => console.error(action.payload));

  constructor(private actions$: Actions,
              private usersService: UsersService) {}
}
