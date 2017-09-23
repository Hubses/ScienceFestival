export const NEWS_ACTION_TYPES = {
    GET: '[news] GET',
    GET_ALL: '[news] GET ALL',
    GET_ALL_SUCCESS: '[news] GET ALL SUCCESS',
    GET_ALL_FAILURE: '[news] GET ALL FAILURE',
    GET_SUCCESS: '[news] GET SUCCESS',
    GET_FAILURE: '[news] GET FAILURE',

    CREATE: '[news] CREATE',
    CREATE_SUCCESS: '[news] CREATE SUCCESS',
    CREATE_FAILURE: '[news] CREATE FAILURE',
    CREATE_CANCEL: '[news] CREATE CANCEL',

    EDIT: '[news] EDIT',
    EDIT_SUCCESS: '[news] EDIT SUCCESS',
    EDIT_FAILURE: '[news] EDIT FAILURE',
    EDIT_CANCEL: '[news] EDIT CANCEL',

    REMOVE: '[news] REMOVE',
    REMOVE_SUCCESS: '[news] REMOVE SUCCESS',
    REMOVE_FAILURE: '[news] REMOVE FAILURE',


    SEARCH: '[news] SEARCH',
    SERCH_COMPLETE: '[news] SEARCH COMPLETE',
    SEARCH_RESULT: '[news] SEACRH RESULT'
};

export const getNewsAction = (payload?: sf.entities.News) => ({// params for api
    type: NEWS_ACTION_TYPES.GET,
    payload
});
export const getAllNewsAction = () => ({// params for api
    type: NEWS_ACTION_TYPES.GET_ALL
});
export const getNewsSuccessAction = (payload: sf.entities.News) => ({
    type: NEWS_ACTION_TYPES.GET_SUCCESS,
    payload
});
export const getAllNewsSuccessAction = (payload: sf.entities.News[]) => ({
    type: NEWS_ACTION_TYPES.GET_SUCCESS,
    payload
});
export const getNewsFailureAction = () => ({
    type: NEWS_ACTION_TYPES.GET_FAILURE
});
export const getAllNewsFailureAction = () => ({
    type: NEWS_ACTION_TYPES.GET_FAILURE
});

export const createNewsAction = () => ({
    type: NEWS_ACTION_TYPES.CREATE
});
export const createNewsCancelAction = () => ({
    type: NEWS_ACTION_TYPES.CREATE_CANCEL
});

export const createNewsSuccessAction = (payload: sf.entities.News) => ({
    type: NEWS_ACTION_TYPES.CREATE_SUCCESS,
    payload
});
export const createNewsFailureAction = () => ({
    type: NEWS_ACTION_TYPES.CREATE_FAILURE
});
export const editNewsAction = (payload?: sf.entities.News) => ({
    type: NEWS_ACTION_TYPES.EDIT,
    payload
});
export const editNewsCancelAction = () => ({
    type: NEWS_ACTION_TYPES.EDIT_CANCEL
});

export const editNewsSuccessAction = (payload: sf.entities.News) => ({
    type: NEWS_ACTION_TYPES.EDIT_SUCCESS,
    payload
});

export const editNewsFailureAction = () => ({
    type: NEWS_ACTION_TYPES.EDIT_FAILURE
});
export const removeNewsAction = (payload: sf.entities.News) => ({
    type: NEWS_ACTION_TYPES.REMOVE,
    payload
});
export const removeNewsSuccessAction = () => ({
    type: NEWS_ACTION_TYPES.REMOVE_SUCCESS
});
export const removeNewsFailureAction = () => ({
    type: NEWS_ACTION_TYPES.REMOVE_FAILURE
});

export const searchNewsAction = (payload: sf.entities.News) => ({
    type: NEWS_ACTION_TYPES.SEARCH,
    payload
});
export const searchNewsCompleteAction = (payload?: sf.entities.NewsParams) => ({
    type: NEWS_ACTION_TYPES.SERCH_COMPLETE,
    payload
});

export const searchNewsResultAction = (payload: sf.entities.News[]) => ({
    type: NEWS_ACTION_TYPES.SEARCH_RESULT,
    payload
})