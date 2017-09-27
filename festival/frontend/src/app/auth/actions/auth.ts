import { Action } from '@ngrx/store';
import { User, Security } from "@sf/auth";

export const ActionTypes = {
  LOGIN: '[AUTH] login',
  LOGIN_SUCCESS: '[AUTH] login success',
  LOGIN_FAILURE: '[AUTH] login failure',
  REGISTER: '[AUTH] register',
  REGISTER_SUCCESS: '[AUTH] register success',
  REGISTER_FAILURE: '[AUTH] register failure',
  LOGOUT: '[AUTH] logout',
  AUTH_REDIRECT: '[AUTH] auth redirect'
};

export class LoginAction implements Action {
  readonly type = ActionTypes.LOGIN;

  constructor(public payload: Security) { }
}

export class LoginSuccessAction implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;

  constructor(public payload?: User) { }
}

export class LoginFailureAction implements Action {
  readonly type = ActionTypes.LOGIN_FAILURE;

  constructor(public payload?: string) { }
}
export class RegisterAction implements Action {
  readonly type = ActionTypes.REGISTER;

  constructor(public payload: Security) { }
}

export class RegisterSuccessAction implements Action {
  readonly type = ActionTypes.REGISTER_SUCCESS;

  constructor(public payload?: User) { }
}

export class RegisterFailureAction implements Action {
  readonly type = ActionTypes.REGISTER_FAILURE;

  constructor(public payload?: string) { }
}

export class LogoutAction implements Action {
  readonly type = ActionTypes.LOGOUT;

  constructor(public payload?: boolean) { }
}
export class RedirectAction implements Action {
  readonly type = ActionTypes.AUTH_REDIRECT;

  constructor(public payload?: string) { }
}

export type Actions
  = LoginAction |
  LoginSuccessAction |
  LoginFailureAction |
  LogoutAction |
  RegisterAction |
  RegisterSuccessAction |
  RegisterFailureAction |
  RedirectAction;
