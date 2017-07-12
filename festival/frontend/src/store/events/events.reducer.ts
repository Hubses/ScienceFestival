import { Action } from '@ngrx/store';
import { EVENTS_ACTION_TYPES } from './events.actions';

type State = sf.store.LoadableObject<Events>;

const initialState: State = {
    isLoaded: false,
    isLoading: false,
    isError: false,
    entity: null
};

const eventsReducer = (state: State = initialState, { type, payload }: Action): State => {
    switch (type) {
        case EVENTS_ACTION_TYPES.GET:
            return Object.assign({}, state, {
                isLoading: true,
                isError: false
            });

        case EVENTS_ACTION_TYPES.GET_SUCCESS:
            return Object.assign({}, state, {
                isLoaded: true,
                isLoading: false,
                isError: false,
                entity: payload
            });

        case EVENTS_ACTION_TYPES.GET_FAILURE:
            return Object.assign({}, state, {
                isLoaded: false,
                isLoading: false,
                isError: true,
            });

        default:
            return state;
    }
};
export default eventsReducer;
