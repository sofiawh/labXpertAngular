import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from 'src/app/store/user/reducers/user.reducer';

// Get the feature state
export const selectUserState = createFeatureSelector<UserState>('users');

// Get the 'users' property from the feature state
export const selectUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);
