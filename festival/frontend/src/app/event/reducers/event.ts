import * as _ from "lodash";
import { Event } from "@sf/event";
// import { Todo } from '../models/todo';
import * as event from "../actions/event";

export interface State {
  loaded: boolean;
  loading: boolean;
  edited: boolean;
  editing: boolean;
  event: Event | null;
}

const initialState: State = {
  loaded: false,
  loading: false,
  edited: false,
  editing: false,
  event: null
};

export function reducer(state = initialState, action: event.Actions): State {
  switch (action.type) {
    case event.ActionTypes.LOAD:
      return {
        loaded: false,
        loading: true,
        edited: false,
        editing: false,
        event: null
      };
    case event.ActionTypes.LOAD_SUCCESS:
      return {
        loaded: true,
        loading: false,
        edited: false,
        editing: false,
        event: _.clone(action.payload)
      };
    case event.ActionTypes.EDIT:
      return {
        loaded: true,
        loading: false,
        edited: false,
        editing: true,
        event: _.clone(action.payload)
      };
    case event.ActionTypes.EDIT_SUCCESS:
      return {
        loaded: true,
        loading: false,
        edited: true,
        editing: false,
        event: _.clone(action.payload)
      };
    default:
      return state;
  }
}

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getEdited = (state: State) => state.edited;
export const getEditing = (state: State) => state.editing;
export const getEvent = (state: State) => state.event;
