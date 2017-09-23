import * as localizationCollectionActions from '../actions/localization.collection';

export interface State {
    loading: boolean;
    loaded: boolean;
    entity: sf.entities.Localization;
};

const initialState: State = {
    loading: false,
    loaded: false,
    entity: null
}
export function localizationCollection(state = initialState, action: localizationCollectionActions.LocalizationCollectionActions): State {
    switch (action.type) {
        case localizationCollectionActions.GET:
            return Object.assign({}, state, {
                loading: true
            });
        case localizationCollectionActions.GET_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                loaded: true,
                entity: action.payload
            });
        case localizationCollectionActions.GET_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                loaded: false,
                entity: null
            });

        default:
            return state;
    }
}