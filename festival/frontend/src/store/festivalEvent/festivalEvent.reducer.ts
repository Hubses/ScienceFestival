import { Action } from '@ngrx/store';
import { FESTIVALEVENT_ACTION_TYPES } from './festivalEvent.actions';

type State = sf.store.LoadableObject<FestivalEvent>;

const initialState: State = {
    isLoaded: false,
    isLoading: false,
    isError: false,
    entity: null,
};

const festivalEventReducer = (state: State = initialState, { type, payload }: Action): State => {
    switch (type) {
        case FESTIVALEVENT_ACTION_TYPES.GET:
            return Object.assign({}, state, {
                isLoading: true,
                isError: false
            });

        case FESTIVALEVENT_ACTION_TYPES.GET_SUCCESS:
            return Object.assign({}, state, {
                isLoaded: true,
                isLoading: false,
                isError: false,
                entity: payload
            });

        case FESTIVALEVENT_ACTION_TYPES.GET_FAILURE:
            return Object.assign({}, state, {
                isLoaded: false,
                isLoading: false,
                isError: true,
            });

        default:
            return state;
    }
};
export default festivalEventReducer;
