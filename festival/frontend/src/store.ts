import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromRouter from '@ngrx/router-store';

import * as fromApplication from './app/core/reducers';

// import * as fromNews from './app/news/reducers';
// import { NewsEffect } from './store/news';
// import { UserEffect } from './store/user';
// import userReducer from './store/user/user.reducer';
// 
// import { layout } from './store/layout';
// import * as fromApp from './store/application';
export interface ApplicationState {
    application: fromApplication.CoreStates;
    router: fromRouter.RouterState;
}
export const ApplicationReducers = {
    application: fromApplication.reducers,
    router: fromRouter.routerReducer,
};

export const store = Store.create(ApplicationReducers);
