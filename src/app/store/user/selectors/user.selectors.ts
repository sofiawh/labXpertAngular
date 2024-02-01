import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from '../reducers/user.reducers';

/**
 * User state
 * @interface
 * @Author : Ayoub ait si ahmad
 */
export const selectUserState = createFeatureSelector<UserState>('users');

export const selectUsers = createSelector(
  selectUserState,
  (state) => state.users
);

export const selectError = createSelector(
  selectUserState,
  (state) => state.error
);
