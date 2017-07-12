export const EVENTS_ACTION_TYPES = {
    GET: '[events] GET',
    GET_SUCCESS: '[events] GET SUCCESS',
    GET_FAILURE: '[events] GET FAILURE'
};

export const getEventsAction = (payload?: EventsParams) => ({
    type: EVENTS_ACTION_TYPES.GET
});

export const getEventsSuccessAction = (payload: Events []) => ({
    type: EVENTS_ACTION_TYPES.GET_SUCCESS,
    payload
});

export const getEventsFailureAction = () => ({
    type: EVENTS_ACTION_TYPES.GET_FAILURE
});
