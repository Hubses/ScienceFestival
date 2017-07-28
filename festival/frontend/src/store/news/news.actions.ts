export const NEWS_ACTION_TYPES = {
    GET: '[news] GET',
    GET_SUCCESS: '[news] GET SUCCESS',
    GET_FAILURE: '[news] GET FAILURE',

    CREATE: '[news] CREATE',
    CREATE_SUCCESS: '[news] CREATE SUCCESS',
    CREATE_FAILURE: '[news] CREATE FAILURE',

    EDIT: '[news] EDIT',
    EDIT_TYPES_START: '[news] EDIT TYPE START',
    EDIT_TYPES_END: '[news] EDIT TYPE END',
    EDIT_SUCCESS: '[news] EDIT SUCCESS',
    EDIT_FAILURE: '[news] EDIT FAILURE',

    REMOVE: '[news] REMOVE',
    REMOVE_SUCCESS: '[news] REMOVE SUCCESS',
    REMOVE_FAILURE: '[news] REMOVE FAILURE',

    SEARCH: '[news] SEARCH',
    SERCH_COMPLETE: '[news] SEARCH COMPLETE'
};

export const getNewsAction = (payload?: sf.entities.News) => ({
    type: NEWS_ACTION_TYPES.GET,
    payload
});

export const getNewsSuccessAction = (payload: sf.entities.News[]) => ({
    type: NEWS_ACTION_TYPES.GET_SUCCESS,
    payload
});

export const getNewsFailureAction = () => ({
    type: NEWS_ACTION_TYPES.GET_FAILURE
});

export const createNewsAction = () => ({
    type: NEWS_ACTION_TYPES.CREATE
});
export const createNewsSuccessAction = (payload: sf.entities.News) => ({
    type: NEWS_ACTION_TYPES.CREATE_SUCCESS,
    payload
});
export const createNewsFailureAction = () => ({
    type: NEWS_ACTION_TYPES.CREATE_FAILURE
});
export const editNewsAction = (payload: sf.entities.News) => ({
    type: NEWS_ACTION_TYPES.EDIT,
    payload
});
export const editNewsSuccessAction = (payload: sf.entities.News) => ({
    type: NEWS_ACTION_TYPES.EDIT_SUCCESS,
    payload
});
export const editNewsStartAction = (payload: sf.entities.News[]) => ({
    type: NEWS_ACTION_TYPES.EDIT_TYPES_END,
    payload
});
export const editNewsFinishAction = (payload: sf.entities.News[]) => ({
    type: NEWS_ACTION_TYPES.EDIT_TYPES_END,
    payload
});
export const editNewsFailureAction = () => ({
    type: NEWS_ACTION_TYPES.EDIT_FAILURE
});
export const removeNewsAction = () => ({
    type: NEWS_ACTION_TYPES.REMOVE
});
export const removeNewsSuccessAction = (payload: sf.entities.News) => ({
    type: NEWS_ACTION_TYPES.REMOVE_SUCCESS,
    payload
});
export const removeNewsFailureAction = () => ({
    type: NEWS_ACTION_TYPES.REMOVE_FAILURE
});

export const searchNewsAction = (payload: sf.entities.News) => ({
    type: NEWS_ACTION_TYPES.SEARCH,
    payload
});
export const searchNewsCompleteAction = (payload: sf.entities.News[]) => ({
    type: NEWS_ACTION_TYPES.SERCH_COMPLETE,
    payload
});

