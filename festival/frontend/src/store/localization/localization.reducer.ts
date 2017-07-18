import { Action } from '@ngrx/store';
import { LOCALIZATION_ACTION_TYPES } from './localization.actions';

type State = sf.store.LoadableObject<sf.entities.Localization>;

const initialState: State = {
    isLoaded: false,
    isLoading: false,
    isError: false,
    entity: null
};

const localizationReducer = (state: State = initialState, { type, payload }: Action): State => {
    switch (type) {
        case LOCALIZATION_ACTION_TYPES.GET:
            return Object.assign({}, state, {
                isLoaded: true,
                isLoading: false,
                isError: false,
                entity: payload
            })
        case LOCALIZATION_ACTION_TYPES.GET_SUCCESS:
            return Object.assign({}, state, {
                isLoaded: false,
                isLoading: true,
                isError: false,
                entity: payload
            })
        default:
            return state;
    }
}