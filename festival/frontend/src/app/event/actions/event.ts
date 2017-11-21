import { Action } from "@ngrx/store";

export const ActionTypes = {
  LOAD: "[Event] Load",
  LOAD_SUCCESS: "[Event] Load Success",
  LOAD_FAIL: "[Event] Load Fail",
  EDIT: "[Event] Edit",
  EDIT_SUCCESS: "[Event] Remove Success",
  EDIT_FAIL: "[Event] Remove Fail"
};

export class LoadAction implements Action {
  readonly type = ActionTypes.LOAD;
  constructor(public payload?: string) {}
}
export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload?: string) {}
}

export class LoadFailAction implements Action {
  readonly type = ActionTypes.LOAD_FAIL;
  constructor(public payload?: string) {}
}

export class EditAction implements Action {
  readonly type = ActionTypes.EDIT;
  constructor(public payload?: string) {}
}
export class EditSuccessAction implements Action {
  readonly type = ActionTypes.EDIT_SUCCESS;
  constructor(public payload?: string) {}
}
export class EditFailAction implements Action {
  readonly type = ActionTypes.EDIT_FAIL;
  constructor(public payload?: string) {}
}

export type Actions =
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction
  | EditAction
  | EditSuccessAction
  | EditFailAction;
