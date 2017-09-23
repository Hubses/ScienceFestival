import { Action } from '@ngrx/store';
import { Post } from '../models/post';

export const ActionTypes = {
  LOAD: '[Posts] Load',
  LOAD_SUCCESS: '[Posts] Load Success',
  LOAD_FAIL: '[Posts] Load Fail'
};

export class LoadAction implements Action {
  readonly type = ActionTypes.LOAD;

  constructor(public payload?: number) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload?: Post[]) {}
}

export class LoadFailAction implements Action {
  readonly type = ActionTypes.LOAD_FAIL;

  constructor(public payload?: string) {}
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | LoadFailAction;
