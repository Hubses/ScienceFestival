import { Action } from '@ngrx/store';

export const GET = '[localization] GET';
export const GET_SUCCESS = '[localization] GET SUCCESS';
export const GET_FAILURE = '[localization] GET FAILURE';

export const CHANGE = '[localization] CHANGE';
export const CHANGE_SUCCESS = '[localization] CHANGE SUCCESS';
export const CHANGE_FAILURE = '[localization] CHANGE FAILURE';


export class GetLocalizationAction implements Action {
    readonly type = GET;
    constructor(public payload?: string) { }
}

export class GetLocalizationSuccessAction implements Action {
    readonly type = GET_SUCCESS;
    constructor(public payload?: sf.entities.Localization) { }
}

export class GetLocalizationFailureAction implements Action {
    readonly type = GET_FAILURE;
    constructor(public payload?: string) { }
}

export class ChangeLocalizationAction implements Action {
    readonly type = CHANGE;
    constructor(public payload?: string) { }
}

export class ChangeLocalizationSuccessAction implements Action {
    readonly type = CHANGE_SUCCESS;
    constructor(public payload: sf.entities.Localization) { }
}
export class ChangeLocalizationFailureAction implements Action {
    readonly type = CHANGE_FAILURE;
    constructor(public payload?: string) { }
}
export type LocalizationActions = GetLocalizationAction
    | GetLocalizationSuccessAction
    | GetLocalizationFailureAction
    | ChangeLocalizationAction
    | ChangeLocalizationSuccessAction
    | ChangeLocalizationFailureAction;
