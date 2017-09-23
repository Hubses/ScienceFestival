import * as _ from 'lodash';
import { Post } from '../models/post';
import * as posts from '../actions/posts';

export interface State {
  loaded: boolean;
  loading: boolean;
  posts: Post[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  posts: []
};

export function reducer(state = initialState, action: posts.Actions): State {
  switch (action.type) {
    case posts.ActionTypes.LOAD:
      return {
        loaded: false,
        loading: true,
        posts: []
      };
    case posts.ActionTypes.LOAD_SUCCESS:
      return {
        loaded: true,
        loading: false,
        posts: _.clone(action.payload)
      };
    default:
      return state;
  }
}

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getPosts = (state: State) => state.posts;
