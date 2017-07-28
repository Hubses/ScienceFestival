import { Action } from '@ngrx/store';

export const GET = '[collection/localization] GET';
export const GET_SUCCESS = '[collection/localization] GET SUCCESS';
export const GET_FAILURE = '[collection/localization] GET FAILURE';

export class GetLocalizationCollectionAction implements Action {
    readonly type = GET;
    constructor(public payload?: string) { }
}
export class GetLocalizationCollectionSuccessAction implements Action {
    readonly type = GET_SUCCESS;
    constructor(public payload?: sf.entities.Localization) { }
}
export class GetLocalizationCollectionFailureAction implements Action {
    readonly type = GET_FAILURE;
    constructor(public payload?: string) { }
}
export type LocalizationCollectionActions = GetLocalizationCollectionAction
    | GetLocalizationCollectionSuccessAction
    | GetLocalizationCollectionFailureAction;
