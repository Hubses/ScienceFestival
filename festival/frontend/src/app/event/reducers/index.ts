import { createReducer, State as AppState } from '../../shared/reducers';
import * as todos from './todos';
import { createSelector } from 'reselect';

export interface ExtendedState extends AppState {
  todo: todos.State;
}

const reducers = {
  todo: todos.reducer
};

export const extendedReducer = createReducer(reducers);

export const getTodoState = (state: ExtendedState) => state.todo;
export const getTodos = createSelector(getTodoState, todos.getTodos);
export const getLoaded = createSelector(getTodoState, todos.getLoaded);
export const getLoading = createSelector(getTodoState, todos.getLoading);
