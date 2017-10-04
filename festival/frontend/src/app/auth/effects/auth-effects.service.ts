import { Injectable, Optional, Inject, InjectionToken } from "@angular/core";
import { Router } from "@angular/router";
import { Action } from "@ngrx/store";
import { Actions, Effect, toPayload } from "@ngrx/effects";
import { Observable } from "rxjs/Rx";
import { of } from "rxjs/observable/of";
import "rxjs/add/operator/exhaust";
import { async } from "rxjs/scheduler/async";

import { AuthService } from "../services/auth.service";
import * as Auth from "../actions/auth";
import { Security, User } from "@sf/auth";
import { Scheduler } from "rxjs/Scheduler";

export const REDIRECT_DEBOUNCE = new InjectionToken<number>(
  "Redirect Debounce"
);
export const REDIRECT_SCHEDULER = new InjectionToken<Scheduler>(
  "Redirect Scheduler"
);
@Injectable()
export class AuthEffectsService {
  // @Effect()
  // loginUserEffect: Observable<loginActions.Actions> = this.actions$
  //   .ofType(loginActions.LOGIN_USER)
  //   .map((action: loginActions.LoginUser) => action.payload)
  //   .mergeMap(payload => {
  //     const body = new HttpParams()
  //       .set('username', payload.username)
  //       .set('password', payload.password)
  //     return this.http
  //       .post<User>(this.config.REST_URL_AUTHENTICATION_LOGON, body)
  //       .map(data => new loginActions.LoginUserSuccess(data))
  //       .catch((error: HttpErrorResponse) =>
  //         of(new loginActions.LoginUserFailure(error))
  //       )
  //   }
  @Effect()
  login$: Observable<Action> = this.actions$
    .ofType(Auth.ActionTypes.LOGIN)
    .map(toPayload)
    .switchMap((payload: Security) => this.authService.login(payload))
    .map((result: User) => new Auth.LoginSuccessAction(result))
    .catch(error => of(new Auth.LoginFailureAction(error)));

  @Effect({ dispatch: false })
  loginSuccess$: Observable<Action> = this.actions$
    .ofType(Auth.ActionTypes.LOGIN_SUCCESS)
    .map(toPayload)
    .do(() => this.router.navigate(["/"]))
    .debounceTime(this.redirectDebounce, this.scheduler || async);

  @Effect({ dispatch: false })
  loginFailure$: Observable<Action> = this.actions$
    .ofType(Auth.ActionTypes.LOGIN_FAILURE)
    .do((action: Auth.LoginFailureAction) => console.error(action.payload));

  @Effect()
  register$: Observable<Action> = this.actions$
    .ofType(Auth.ActionTypes.REGISTER)
    .map(toPayload)
    .switchMap((payload: Security) => this.authService.register(payload))
    .map((result: User) => new Auth.RegisterSuccessAction(result))
    .catch(error => of(new Auth.RegisterFailureAction(error)));

  @Effect({ dispatch: false })
  registerFailure$: Observable<Action> = this.actions$
    .ofType(Auth.ActionTypes.REGISTER_FAILURE)
    .do((action: Auth.RegisterFailureAction) => console.error(action.payload));

  @Effect()
  logout$: Observable<Action> = this.actions$
    .ofType(Auth.ActionTypes.LOGOUT)
    .map(toPayload)
    .switchMap(() => this.authService.logout())
    .catch(err => Observable.throw(err))
    .do(() => this.router.navigate(["/"]));

  @Effect({ dispatch: false })
  redirectError$: Observable<Action> = this.actions$
    .ofType(Auth.ActionTypes.LOGIN_FAILURE, Auth.ActionTypes.REGISTER_FAILURE)
    .do(() => this.router.navigate(["/auth/error"]));

  @Effect()
  loadUserRoles$: Observable<Action> = this.actions$
    .ofType(Auth.ActionTypes.USER_ROLES)
    .map(toPayload)
    .switchMap(() => this.authService.getUserRoles())
    .map(result => new Auth.LoadRolesSuccessAction(result))
    .catch((error: string) => of(new Auth.LoadRolesFailureAction(error)))
    .share();

  @Effect({ dispatch: false })
  loadUserRolesFail$: Observable<Action> = this.actions$
    .ofType(Auth.ActionTypes.USER_ROLES_FAILURE)
    .do((action: Auth.LoadRolesFailureAction) => console.error(action.payload));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    @Optional()
    @Inject(REDIRECT_DEBOUNCE)
    private redirectDebounce: number = 1000,
    @Optional()
    @Inject(REDIRECT_SCHEDULER)
    private scheduler: Scheduler
  ) {}
}
