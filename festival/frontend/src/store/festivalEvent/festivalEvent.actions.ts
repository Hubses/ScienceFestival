export const FESTIVALEVENT_ACTION_TYPES = {
    GET: '[FestivalEvent] GET',
    GET_SUCCESS: '[FestivalEvent] GET SUCCESS',
    GET_FAILURE: '[FestivalEvent] GET FAILURE'
};

export const getFestivalEventAction = () => ({
    type: FESTIVALEVENT_ACTION_TYPES.GET
});

export const getFestivalEventSuccessAction = (payload: FestivalEvent[]) => ({
    type: FESTIVALEVENT_ACTION_TYPES.GET_SUCCESS,
    payload
});

export const getFestivalEventFailureAction = () => ({
    type: FESTIVALEVENT_ACTION_TYPES.GET_FAILURE
});
