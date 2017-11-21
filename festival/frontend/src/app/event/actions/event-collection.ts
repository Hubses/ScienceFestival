import { Action } from "@ngrx/store";

import { Event } from "@sf/event";

export const ActionTypes = {
  LOAD: "[Event Collection] Load",
  LOAD_SUCCES: "[Event Collection] Load Success",
  LOAD_FAIL: "[Event Collection] Load Fail",
  REMOVE: "[Event Collection] Remove",
  REMOVE_SUCCESS: "[Event Collection] Remove Success",
  REMOVE_FAIL: "[Event Collection] Remove Fail",
  ADD: "[Event Collection] Add",
  ADD_SUCCESS: "[Event Collection] Add Success",
  ADD_FAIL: "[Event Collection] Add Fail"
};

export class LoadCollectionAction implements Action {
  readonly type = ActionTypes.LOAD;

  constructor(public payload?: number) {}
}

export class LoadCollectionSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCES;

  constructor(public payload?: Event[]) {}
}

export class LoadCollectionFailAction implements Action {
  readonly type = ActionTypes.LOAD_FAIL;

  constructor(public payload?: string) {}
}
export class RemoveCollectionAction implements Action {
  readonly type = ActionTypes.REMOVE;
  constructor(public payload?: string) {}
}
export class RemoveCollectionSuccessAction implements Action {
  readonly type = ActionTypes.REMOVE_SUCCESS;
  constructor(public payload?: string) {}
}
export class RemoveCollectionFailAction implements Action {
  readonly type = ActionTypes.REMOVE_FAIL;
  constructor(public payload?: string) {}
}

export class AddCollectionAction implements Action {
  readonly type = ActionTypes.ADD;
  constructor(public payload?: string) {}
}
export class AddCollectionSuccessAction implements Action {
  readonly type = ActionTypes.ADD_SUCCESS;
  constructor(public payload?: string) {}
}
export class AddCollectionFailAction implements Action {
  readonly type = ActionTypes.ADD_FAIL;
  constructor(public payload?: string) {}
}

export type Actions =
  | LoadCollectionAction
  | LoadCollectionSuccessAction
  | LoadCollectionFailAction
  | RemoveCollectionAction
  | RemoveCollectionSuccessAction
  | RemoveCollectionFailAction
  | AddCollectionAction
  | AddCollectionSuccessAction
  | AddCollectionFailAction;
