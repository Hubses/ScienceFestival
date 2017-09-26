import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/exhaust';

import { AuthService } from '../services/auth.service';
import * as Auth from '../actions/auth';
import { Security, User } from '@sf/auth';

@Injectable()
export class AuthEffectsService {
  @Effect()
  login$: Observable<Action> = this.actions$
    .ofType(Auth.ActionTypes.LOGIN)
    .map(toPayload)
    .switchMap((payload: Security) =>
      this.authService.login(payload))
    .map((result: User) => new Auth.LoginSuccessAction(result))
    .catch((error) => of(new Auth.LoginFailureAction(error)));

  // @Effect()
  // register$: Observable<Action> = this.actions$
  //   .ofType(Auth.ActionTypes.REGISTER)
  //   .map(toPayload)
  //   .switchMap((payload: Security) => this.authService.register(payload))
  //   .map((payload: User) => new Auth.RegisterSuccessAction(payload))
  //   .catch((error) => of(new Auth.LoginFailureAction(error)));

  @Effect({ dispatch: false })
  loginSuccess$: Observable<Action> = this.actions$
    .ofType(Auth.ActionTypes.LOGIN_SUCCESS)
    .map(toPayload)
    .do(() => this.router.navigate(['/']));

  @Effect({ dispatch: false })
  logout$: Observable<Action> = this.actions$
    .ofType(Auth.ActionTypes.LOGOUT)
    .map(toPayload)
    .switchMap(() => this.authService.logout())
    .map((result: boolean) => new Auth.LogoutAction(result))
    .do(() => this.router.navigate(['/']));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router) { }
}
