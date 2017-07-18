import { StoreModule, combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { createSelector } from 'reselect';
import newsReducer from './store/news/news.reducer';
import { NewsEffect } from './store/news';
import { UserEffect } from './store/user';
import userReducer from './store/user/user.reducer';
import * as fromRouter from '@ngrx/router-store';
import { layout } from './store/layout';
import * as fromApp from './store/application';

export interface ApplicationState {
    application: fromApp.State;
    layout: any;
    router: fromRouter.RouterState;
    newsReducer: sf.entities.News[];
    userReducer: sf.entities.User;
}
export const ApplicationReducers = {
    newsReducer,
    userReducer,
    layout: layout,
    router: fromRouter.routerReducer,
    application: fromApp.reducer
};
