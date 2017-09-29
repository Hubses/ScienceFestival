import { Action } from '@ngrx/store';
import { User, Security } from '@sf/auth';

export const ActionTypes = {
  LOGIN: '[AUTH] login',
  LOGIN_SUCCESS: '[AUTH] login success',
  LOGIN_FAILURE: '[AUTH] login failure',
  REGISTER: '[AUTH] register',
  REGISTER_SUCCESS: '[AUTH] register success',
  REGISTER_FAILURE: '[AUTH] register failure',
  LOGOUT: '[AUTH] logout',
  USER_ROLES: '[AUTH] user roles',
  USER_ROLES_SUCCESS: '[AUTH] user roles success',
  USER_ROLES_FAILURE: '[AUTH] user roles failure'
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
export class LoadRolesAction implements Action {
  readonly type = ActionTypes.USER_ROLES;

  constructor(public payload?: any) { }
}
export class LoadRolesSuccessAction implements Action {
  readonly type = ActionTypes.USER_ROLES_SUCCESS;

  constructor(public payload?: any) { }
}
export class LoadRolesFailureAction implements Action {
  readonly type = ActionTypes.USER_ROLES_FAILURE;

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
  LoadRolesAction |
  LoadRolesSuccessAction |
  LoadRolesFailureAction;
