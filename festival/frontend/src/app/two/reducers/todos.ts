import * as _ from 'lodash';
import { Todo } from '../models/todo';
import * as todos from '../actions/todos';

export interface State {
  loaded: boolean;
  loading: boolean;
  todos: Todo[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  todos: []
};

export function reducer(state = initialState, action: todos.Actions): State {
  switch (action.type) {
    case todos.ActionTypes.LOAD:
      return {
        loaded: false,
        loading: true,
        todos: []
      };
    case todos.ActionTypes.LOAD_SUCCESS:
      return {
        loaded: true,
        loading: false,
        todos: _.clone(action.payload)
      };
    default:
      return state;
  }
}

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getTodos = (state: State) => state.todos;
