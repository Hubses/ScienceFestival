import * as localizationActions from '../actions/localization.actions';

export interface State {
    loading: boolean;
    loaded: boolean;
    changing: boolean;
    changed: boolean;
    entity: sf.entities.Localization;
}
const initialState: State = {
    loading: false,
    loaded: false,
    changing: false,
    changed: false,
    entity: null
}

export function localization(state = initialState, action: localizationActions.LocalizationActions) {
    switch (action.type) {
        case localizationActions.GET:
            return Object.assign({}, state, {
                loading: true,
                loaded: false
            });

        case localizationActions.GET_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                loaded: true,
                entity: action.payload
            });
        case localizationActions.GET_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                loaded: false,
                entity: null
            });

        case localizationActions.CHANGE:
            return Object.assign({}, state, {
                changing: true,
                changed: false
            });
        case localizationActions.CHANGE_SUCCESS:
            return Object.assign({}, state, {
                changing: false,
                changed: true,
                entity: action.payload
            });
        case localizationActions.CHANGE_FAILURE:
            return Object.assign({}, state, {
                changing: false,
                changed: false,
                entity: null
            });

        default:
            return state;
    }
}