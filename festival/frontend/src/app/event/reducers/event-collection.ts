import * as _ from "lodash";
import { Event } from "@sf/event";
import * as collection from "../actions/event-collection";

export interface State {
  loaded?: boolean;
  loading?: boolean;
  removed?: boolean;
  removing?: boolean;
  added?: boolean;
  adding?: boolean;
  events: Event[] | null;
}

const initialState: State = {
  loaded: false,
  loading: false,
  removed: false,
  removing: false,
  added: false,
  adding: false,
  events: null
};

export function reducer(
  state = initialState,
  action: collection.Actions
): State {
  switch (action.type) {
    case collection.ActionTypes.LOAD:
      return {
        loaded: false,
        loading: true,
        events: null
      };
    case collection.ActionTypes.LOAD_SUCCES:
      return {
        loaded: true,
        loading: false,
        events: _.clone(action.payload)
      };
    case collection.ActionTypes.ADD:
      return {
        loaded: true,
        loading: false,
        added: false,
        adding: true,
        events: _.clone(action.payload)
      };
    case collection.ActionTypes.ADD_SUCCESS:
      return {
        loaded: true,
        loading: false,
        added: true,
        adding: false,
        events: _.clone(action.payload)
      };
    case collection.ActionTypes.REMOVE:
      return {
        loaded: true,
        loading: false,
        removed: false,
        removing: true,
        events: _.clone(action.payload)
      };
    case collection.ActionTypes.REMOVE_SUCCESS:
      return {
        loaded: true,
        loading: false,
        removed: true,
        removing: false,
        events: _.clone(action.payload)
      };
    default:
      return state;
  }
}

export const getCollection = (state: State) => state.events;
export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getAdded = (state: State) => state.added;
export const getAdding = (state: State) => state.adding;
export const getRemoved = (state: State) => state.removed;
export const getRemoving = (state: State) => state.removing;
