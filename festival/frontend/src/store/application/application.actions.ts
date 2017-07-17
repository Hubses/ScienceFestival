import { Action } from '@ngrx/store';

export const GET_LOCALIZATION_LIST = '[Application] Get localization list';
export const CHANGE_LOCALIZATION = '[Application] Change localization';


export class GetLocalizationListAction implements Action {
    readonly type = GET_LOCALIZATION_LIST;
    constructor(public payload?: sf.entities.Localization) { }
}
export class ChangeLocalizationAction implements Action {
    readonly type = CHANGE_LOCALIZATION;
    constructor(public payload: sf.entities.Localization) { }
}

export type Actions =
    ChangeLocalizationAction
    | GetLocalizationListAction;
