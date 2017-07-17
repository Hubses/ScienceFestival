import { StoreModule, combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { createSelector } from 'reselect';
import newsReducer from './store/news/news.reducer';
import { NewsEffect } from './store/news';
import { UserEffect } from './store/user';
import userReducer from './store/user/user.reducer';
import * as fromRouter from '@ngrx/router-store';
import * as fromLayout from './store/layout';

export interface State {
    layout: fromLayout.State;
    router: fromRouter.RouterState;
}
export const ApplicationReducers = {
    newsReducer,
    userReducer,
    layout: fromLayout.reducer,
    router: fromRouter.routerReducer
};

export const getLayoutState = (state: State) => state.layout;

export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);





