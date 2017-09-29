import { createReducer, State as AppState } from '../../shared/reducers';
import { createSelector } from 'reselect';
import * as fromAuth from './auth';
import * as fromLoginPage from './login-page';
import { ActionReducer } from '@ngrx/store';
export interface AuthState extends AppState {
  auth: fromAuth.State;
  loginPage: fromLoginPage.State;
}
export const reducers = {
  auth: fromAuth.reducer,
  loginPage: fromLoginPage.reducer,
};
export const extendedReducer: ActionReducer<AppState> = createReducer(reducers);

export const getStatusState = (state: AuthState) => state.auth;
export const getLoginPageState = (state: AuthState) => state.loginPage;

export const getUser = createSelector(getStatusState, fromAuth.getUser);
export const getLoggedIn = createSelector(getStatusState, fromAuth.getLoggedIn);
export const getError = createSelector(getLoginPageState, fromLoginPage.getError);
export const getPending = createSelector(getLoginPageState, fromLoginPage.getPending);

export const getUserRoles = createSelector(getStatusState, fromAuth.getUserRoles);
