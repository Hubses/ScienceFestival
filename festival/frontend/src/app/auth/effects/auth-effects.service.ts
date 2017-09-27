import { Injectable, Optional, Inject, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/exhaust';

import { AuthService } from '../services/auth.service';
import * as Auth from '../actions/auth';
import { Security, User } from '@sf/auth';

export const REDIRECT_DEBOUNCE = new InjectionToken<number>('Redirect Debounce');
// export const SEARCH_SCHEDULER = new InjectionToken<Scheduler>(
//   'Search Scheduler'
// );

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

  @Effect()
  register$: Observable<Action> = this.actions$
    .ofType(Auth.ActionTypes.REGISTER)
    .map(toPayload)
    .switchMap((payload: Security) => this.authService.register(payload))
    .map((result: User) => new Auth.RegisterSuccessAction(result))
    .catch((error) => of(new Auth.RegisterFailureAction(error)));

  @Effect({ dispatch: false })
  loginSuccess$: Observable<Action> = this.actions$
    .ofType(Auth.ActionTypes.LOGIN_SUCCESS)
    .map(() => new Auth.LoginRedirectAction())
    .do(() => this.router.navigate(['/login']));

  @Effect({ dispatch: false })
  logout$: Observable<Action> = this.actions$
    .ofType(Auth.ActionTypes.LOGOUT)
    .map(toPayload)
    .switchMap(() => this.authService.logout())
    .map((result: boolean) => new Auth.LogoutAction(result))
    .do(() => this.router.navigate(['/logout']));

  @Effect({ dispatch: false })
  logoutHome$: Observable<Action> = this.actions$
    .ofType(Auth.ActionTypes.LOGOUT, Auth.ActionTypes.AUTH_REDIRECT)
    .map(toPayload)
    .debounceTime(500)
    .map((result: boolean) => new Auth.LogoutAction(result))
    .do(() => this.router.navigate(['/']));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    @Optional()
    @Inject(REDIRECT_DEBOUNCE)
    private redirectDebounce: number = 300
  ) { }
}
