import { Injectable } from '@angular/core';

import { Action, Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';

import { Observable } from 'rxjs';

import { getUserAction, getUserFailureAction, getUserSuccessAction, USER_ACTION_TYPES } from './user.actions';

import { UserRepository } from './user.repository';

@Injectable()
export class UserEffect {

    @Effect() public getNews$: Observable<Action> = this.actions$
        .ofType(USER_ACTION_TYPES.GET)
        .map(toPayload)
        .switchMap((payload: sf.entities.User) => this.userRepository.getUser(payload.id)
            .map(results => getUserSuccessAction(results))
            .catch(() => Observable.of(getUserFailureAction())));

    constructor(
        private actions$: Actions,
        private userRepository: UserRepository
    ) { }
}