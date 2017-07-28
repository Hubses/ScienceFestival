import { Action } from '@ngrx/store';

export const OPEN_SIDENAV = '[Layout] Open Sidenav';
export const CLOSE_SIDENAV = '[Layout] Close Sidenav';
export const WIDE_SIDENAV = '[Layout] Wide Sidenav';
export const COLLAPSE_SIDENAV = '[Layout] Collapse Sidenav';
export class OpenSidenavAction implements Action {
    readonly type = OPEN_SIDENAV;
}

export class CloseSidenavAction implements Action {
    readonly type = CLOSE_SIDENAV;
}

export class WideSidenavAction implements Action {
    readonly type = WIDE_SIDENAV;
}

export class CollapseSidenavAction implements Action {
    readonly type = COLLAPSE_SIDENAV;
}


export type SidenavActions
    = OpenSidenavAction
    | CloseSidenavAction
    | WideSidenavAction
    | CollapseSidenavAction;
