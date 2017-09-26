import { Action } from '@ngrx/store';
import { Todo } from '../models/todo';

export const ActionTypes = {
  LOAD: '[Todos] Load',
  LOAD_SUCCESS: '[Todos] Load Success',
  LOAD_FAIL: '[Todos] Load Fail'
};

export class LoadAction implements Action {
  readonly type = ActionTypes.LOAD;

  constructor(public payload?: number) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload?: Todo[]) {}
}

export class LoadFailAction implements Action {
  readonly type = ActionTypes.LOAD_FAIL;

  constructor(public payload?: string) {}
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | LoadFailAction;
