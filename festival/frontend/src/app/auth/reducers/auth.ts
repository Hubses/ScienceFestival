import * as _ from "lodash";
import { Security, User } from "@sf/auth";
import * as auth from "../actions/auth";

export interface State {
  loggedIn: boolean;
  user: User | null;
  userRoles: number | null;
}

const initialState: State = {
  loggedIn: false,
  user: null,
  userRoles: null
};

export function reducer(state = initialState, action: auth.Actions): State {
  switch (action.type) {
    case auth.ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: _.clone(action.payload)
      };
    case auth.ActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loggedIn: false,
        user: _.clone(action.payload)
      };
    case auth.ActionTypes.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: null
      };

    case auth.ActionTypes.USER_ROLES_SUCCESS:
      return {
        ...state,
        userRoles: _.clone(action.payload)
      };

    default:
      return state;
  }
}

export const getLoggedIn = (state: State) => state.loggedIn;
export const getUser = (state: State) => state.user;
export const getUserRoles = (state: State) => state.userRoles;
