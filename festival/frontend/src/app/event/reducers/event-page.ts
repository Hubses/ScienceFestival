import * as _ from "lodash";
import { Security, User } from "@sf/auth";
import * as event from "../actions/event";

export interface State {
  error: string | null;
  pending: boolean;
}

const initialState: State = {
  error: null,
  pending: false
};

export function reducer(state = initialState, action: event.Actions): State {
  switch (action.type) {
    case event.ActionTypes.LOAD:
      return {
        ...state,
        error: null,
        pending: true
      };
    case event.ActionTypes.LOAD_FAIL:
      return {
        ...state,
        error: _.clone(action.payload),
        pending: false
      };
    case event.ActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        error: null,
        pending: false
      };
    case event.ActionTypes.EDIT:
      return {
        ...state,
        error: null,
        pending: true
      };
    case event.ActionTypes.EDIT_FAIL:
      return {
        ...state,
        error: _.clone(action.payload),
        pending: false
      };
    case event.ActionTypes.EDIT_SUCCESS:
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
