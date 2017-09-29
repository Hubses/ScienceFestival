import * as _ from 'lodash';
import { Security, User } from "@sf/auth";
import * as auth from "../actions/auth";

export interface State {
    error: string | null;
    pending: boolean;
}

const initialState: State = {
    error: null,
    pending: false
};

export function reducer(state = initialState, action: auth.Actions): State {
    switch (action.type) {
        case auth.ActionTypes.LOGIN:
            return {
                ...state,
                error: null,
                pending: true
            };
        case auth.ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                pending: false,
            };
        case auth.ActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                error: _.clone(action.payload),
                pending: false,
            };
        case auth.ActionTypes.REGISTER:
            return {
                ...state,
                error: null,
                pending: true
            };
        case auth.ActionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                error: null,
                pending: false
            };
        case auth.ActionTypes.REGISTER_FAILURE:
            return {
                ...state,
                error: _.clone(action.payload),
                pending: false
            };
        case auth.ActionTypes.USER_ROLES_FAILURE:
            return {
                ...state,
                error: _.clone(action.payload),
                pending: false
            };
        case auth.ActionTypes.USER_ROLES_SUCCESS:
            return {
                ...state,
                error: null,
                pending: false
            };
        default:
            return state;
    }
}
export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
