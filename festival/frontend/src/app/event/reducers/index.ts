import { createReducer, State as AppState } from "../../shared/reducers";
import * as event from "./event";
import * as collection from "./event-collection";
import { createSelector } from "reselect";

export interface ExtendedState extends AppState {
  event: event.State;
  collection: collection.State;
}

const reducers = {
  event: event.reducer,
  collection: collection.reducer
};

export const extendedReducer = createReducer(reducers);

export const getEventState = (state: ExtendedState) => state.event;
export const getCollectionState = (state: ExtendedState) => state.collection;

export const getEvent = createSelector(getEventState, event.getEvent);
export const getEventLoaded = createSelector(getEventState, event.getLoaded);
export const getEventLoading = createSelector(getEventState, event.getLoading);
export const getEventEdited = createSelector(getEventState, event.getEdited);
export const getEventEditing = createSelector(getEventState, event.getEditing);

export const getCollection = createSelector(
  getCollectionState,
  collection.getCollection
);
export const getCollectionLoaded = createSelector(
  getCollectionState,
  collection.getLoaded
);
export const getCollectionLoading = createSelector(
  getCollectionState,
  collection.getLoading
);
