import { Action } from '@ngrx/store';
import { User } from '../models/user';

export const ActionTypes = {
  LOAD: '[Users] Load',
  LOAD_SUCCESS: '[Users] Load Success',
  LOAD_FAIL: '[Users] Load Fail'
};

export class LoadAction implements Action {
  readonly type = ActionTypes.LOAD;

  constructor() {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload?: User[]) {}
}

export class LoadFailAction implements Action {
  readonly type = ActionTypes.LOAD_FAIL;

  constructor(public payload?: string) {}
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | LoadFailAction;
