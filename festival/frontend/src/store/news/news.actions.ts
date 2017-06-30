export const NEWS_ACTION_TYPES = {
    GET: '[news] GET',
    GET_SUCCESS: '[news] GET SUCCESS',
    GET_FAILURE: '[news] GET FAILURE'
};

export const getNewsAction = (payload?: NewsParams) => ({
    type: NEWS_ACTION_TYPES.GET
});

export const getNewsSuccessAction = (payload: News[]) => ({
    type: NEWS_ACTION_TYPES.GET_SUCCESS,
    payload
});

export const getNewsFailureAction = () => ({
    type: NEWS_ACTION_TYPES.GET_FAILURE
});
