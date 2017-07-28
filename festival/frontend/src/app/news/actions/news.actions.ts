import { Action } from '@ngrx/store';

export const GET = '[news] GET';
export const GET_SUCCESS = '[news] GET SUCCESS';
export const GET_FAILURE = '[news] GET FAILURE';

export const EDIT = '[news] EDIT';
export const EDIT_SUCCESS = '[news] EDIT SUCCESS';
export const EDIT_FAILURE = '[news] EDIT FAILURE';
export class GetNewsAction implements Action {
    readonly type = GET;
    constructor(public payload?: sf.entities.NewsParams) { }
}

export class GetNewsSuccessAction implements Action {
    readonly type = GET_SUCCESS;
    constructor(public payload?: sf.entities.News) { }
}
export class GetNewsFailureAction implements Action {
    readonly type = GET_FAILURE;
    constructor(public payload?: string) { }
}

export class EditNewsAction implements Action {
    readonly type = EDIT;
}
export class EditNewsSuccessAction implements Action {
    readonly type = EDIT;
    constructor(public payload: sf.entities.News) { }
}
export class EditNewsFailureAction implements Action {
    readonly type = EDIT;
}

export type Actions = GetNewsAction
    | GetNewsFailureAction
    | GetNewsSuccessAction
    | EditNewsAction
    | EditNewsSuccessAction
    | EditNewsFailureAction;
