import * as _ from 'lodash';
import { User } from '../models/user';
import * as users from '../actions/users';
import { Action } from '@ngrx/store';

export interface State {
  loaded: boolean;
  loading: boolean;
  users: User[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  users: []
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case users.ActionTypes.LOAD:
      return {
        loaded: false,
        loading: true,
        users: []
      };
    case users.ActionTypes.LOAD_SUCCESS:
      return {
        loaded: true,
        loading: false,
        users: _.clone(action.payload)
      };
    default:
      return state;
  }
}

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getUsers = (state: State) => state.users;
