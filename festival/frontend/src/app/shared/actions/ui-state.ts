import { Action } from '@ngrx/store';

export const ActionTypes = {
  OPEN_SIDEBAR: '[Layout] Open Sidebar',
  CLOSE_SIDEBAR: '[Layout] Close Sidebar'
};

export class OpenSidebarAction implements Action {
  readonly type = ActionTypes.OPEN_SIDEBAR;

  constructor() {}
}

export class CloseSidebarAction implements Action {
  readonly type = ActionTypes.CLOSE_SIDEBAR;

  constructor() {}
}

export type Actions
  = OpenSidebarAction
  | CloseSidebarAction;
