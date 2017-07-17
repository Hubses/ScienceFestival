import { Action } from '@ngrx/store';
import { USER_ACTION_TYPES } from './user.actions';

type State = sf.store.LoadableObject<sf.entities.User>;

const initialState: State = {
    isLoaded: false,
    isLoading: false,
    isError: false,
    entity: null
};

const userReducer = (state: State = initialState, { type, payload }: Action): State => {
    switch (type) {
        case USER_ACTION_TYPES.GET:
            return Object.assign({}, state, {
                isLoading: true,
                isError: false
            });

        case USER_ACTION_TYPES.GET_SUCCESS:
            return Object.assign({}, state, {
                isLoaded: true,
                isLoading: false,
                isError: false,
                entity: payload
            });

        case USER_ACTION_TYPES.GET_FAILURE:
            return Object.assign({}, state, {
                isLoaded: false,
                isLoading: false,
                isError: true,
            });

        default:
            return state;
    }
};
export default userReducer;
