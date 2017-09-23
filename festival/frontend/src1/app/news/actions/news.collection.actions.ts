import { Action } from '@ngrx/store';

export const GET = '[news collection] GET';
export const GET_SUCCESS = '[news collection] GET SUCCESS';
export const GET_FAILURE = '[news collection] GET FAILURE';

// export const SEARCH = '[news collection] SEARCH';
// export const SEARCH_COMPLETE = '[news collection] SEARCH COMPLETE';

export const ADD_NEWS = '[news collection] ADD NEWS';
export const ADD_NEWS_SUCCESS = '[news collection] ADD NEWS SUCCESS';
export const ADD_NEWS_FAILURE = '[news collection] ADD NEWS FAILURE';

export const REMOVE_NEWS = '[news collection] REMOVE NEWS';
export const REMOVE_NEWS_SUCCESS = '[news collection] REMOVE NEWS SUCCESS';
export const REMOVE_NEWS_FAILURE = '[news collection] REMOVE NEWS FAILURE';

export class GetNewsCollectionAction implements Action {
    readonly type = GET;
    constructor(public payload?: string) { }
}
export class GetNewsCollectionSuccessAction implements Action {
    readonly type = GET_SUCCESS;
    constructor(public payload?: sf.entities.News[]) { }
}
export class GetNewsCollectionFailureAction implements Action {
    readonly type = GET_FAILURE;
    constructor(public payload?: string) { }
}
export class AddNewsAction implements Action {
    readonly type = ADD_NEWS;
    constructor(public payload?: string) { }
}
export class AddNewsSuccessAction implements Action {
    readonly type = ADD_NEWS_SUCCESS;
    constructor(public payload?: sf.entities.News) { }
}
export class AddNewsFailureAction implements Action {
    readonly type = ADD_NEWS_FAILURE;
}

export class RemoveNewsAction implements Action {
    readonly type = REMOVE_NEWS;
    constructor(public payload?: string) { }
}
export class RemoveNewsSuccessAction implements Action {
    readonly type = REMOVE_NEWS_SUCCESS;
    constructor(public payload?: sf.entities.News | number) { }
}
export class RemoveNewsFailureAction implements Action {
    readonly type = REMOVE_NEWS_FAILURE;
}

export type Actions = GetNewsCollectionAction
    | GetNewsCollectionSuccessAction
    | GetNewsCollectionFailureAction
    | AddNewsAction
    | AddNewsSuccessAction
    | AddNewsFailureAction
    | RemoveNewsAction
    | RemoveNewsSuccessAction
    | RemoveNewsFailureAction;
