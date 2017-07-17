export const USER_ACTION_TYPES = {
    GET: '[user] GET',
    GET_SUCCESS: '[user] GET SUCCESS',
    GET_FAILURE: '[user] GET FAILURE'
};

export const getUserAction = (payload?) => ({
    type: USER_ACTION_TYPES.GET,
    payload
});

export const getUserSuccessAction = (payload: sf.entities.User) => ({
    type: USER_ACTION_TYPES.GET_SUCCESS,
    payload
});

export const getUserFailureAction = () => ({
    type: USER_ACTION_TYPES.GET_FAILURE
});
