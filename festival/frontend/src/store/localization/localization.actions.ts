export const LOCALIZATION_ACTION_TYPES = {
    GET: '[localization]: GET',
    GET_SUCCESS: '[localization] GET SUCCESS',
    GET_FAILURE: '[localization] GET FAILURE'
}
export const getLocalizationAction = (payload?) => ({
    type: LOCALIZATION_ACTION_TYPES.GET
});
export const getLocalizationSuccessAction = (payload: sf.entities.Localization) => ({
    type: LOCALIZATION_ACTION_TYPES.GET_SUCCESS,
    payload
});
export const getLocalizationFailureAction = () => ({
    type: LOCALIZATION_ACTION_TYPES.GET_FAILURE
});