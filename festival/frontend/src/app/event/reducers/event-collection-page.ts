import * as _ from "lodash";
import { Security, User } from "@sf/auth";
import * as collection from "../actions/event-collection";

export interface State {
  error: string | null;
  pending: boolean;
}

const initialState: State = {
  error: null,
  pending: false
};

export function reducer(
  state = initialState,
  action: collection.Actions
): State {
  switch (action.type) {
    case collection.ActionTypes.LOAD:
      return {
        ...state,
        error: null,
        pending: true
      };
    case collection.ActionTypes.LOAD_FAIL:
      return {
        ...state,
        error: _.clone(action.payload),
        pending: false
      };
    case collection.ActionTypes.LOAD_SUCCES:
      return {
        ...state,
        error: null,
        pending: false
      };
    case collection.ActionTypes.ADD:
      return {
        ...state,
        error: null,
        pending: true
      };
    case collection.ActionTypes.ADD_FAIL:
      return {
        ...state,
        error: _.clone(action.payload),
        pending: false
      };
    case collection.ActionTypes.ADD_SUCCESS:
      return {
        ...state,
        error: null,
        pending: false
      };
    case collection.ActionTypes.REMOVE:
      return {
        ...state,
        error: null,
        pending: true
      };
    case collection.ActionTypes.REMOVE_FAIL:
      return {
        ...state,
        error: _.clone(action.payload),
        pending: false
      };
    case collection.ActionTypes.REMOVE_SUCCESS:
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
