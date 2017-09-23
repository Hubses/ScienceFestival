import { createReducer, State as AppState } from '../../shared/reducers';
import * as posts from './posts';
import { createSelector } from 'reselect';

export interface ExtendedState extends AppState {
  blog: posts.State;
}

const reducers = {
  blog: posts.reducer
};

export const extendedReducer = createReducer(reducers);

export const getBlogState = (state: ExtendedState) => state.blog;
export const getPosts = createSelector(getBlogState, posts.getPosts);
export const getLoaded = createSelector(getBlogState, posts.getLoaded);
export const getLoading = createSelector(getBlogState, posts.getLoading);
