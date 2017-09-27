import { isDevMode } from '@angular/core';
import { createSelector } from 'reselect';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';

import * as router from '@ngrx/router-store';
import * as ui from './ui-state';


export interface State {
  router: router.RouterState;
  ui: ui.State;
}

const reducers = {
  router: router.routerReducer,
  ui: ui.reducer
};

export function createReducer(asyncReducers = {}): ActionReducer<any> {
  if (isDevMode()) {
    return compose(storeFreeze, combineReducers)(Object.assign(reducers, asyncReducers));
  }

  return combineReducers(Object.assign(reducers, asyncReducers));
}

export const rootReducer = createReducer(); // prout

export const getUIState = (state: State) => state.ui;
export const getShowSidebar = createSelector(getUIState, ui.getShowSidebar);

// export default createReducer;
// export default rootReducer;
