import { Action } from '@ngrx/store';
import { USER_ACTION_TYPES } from './user.actions';

type UserStates = sf.store.LoadableObject<sf.entities.User>
    | sf.store.EditableObject<sf.entities.User>;

const initialState: UserStates = {
    isLoaded: false,
    isLoading: false,
    isError: false,
    entity: null,
    isEditable: true,
    isEdited: false,
    isEditError: false,
    isEditSuccess: false
};

const userReducer = (state: UserStates = initialState, { type, payload }: Action): UserStates => {
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
