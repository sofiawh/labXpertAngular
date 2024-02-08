import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { User } from 'src/app/types/user/user';

/**
 * User state
 * @interface
 * @Author : Mariam Laghfiri
 */
export interface UserState {
  users: User[];
  error: any;
}

/**
 * Initial state
 */
export const initialState: UserState = {
  users: [],
  error: null,
};
/**
 * User reducer
 * @function
 * @param {UserState} state
 * @param {UserActions} action
 * @returns {UserState}
 */
export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({ ...state, error })),

  on(UserActions.addUserSuccess, (state, { user }) => ({ ...state, users: [...state.users, user] })),
  on(UserActions.addUserFailure, (state, { error }) => ({ ...state, error })),

  on(UserActions.editUserSuccess, (state, { user }) => ({...state, users: state.users.map(u => (u.userID === user.userID ? user : u)) })),
  on(UserActions.editUserFailure, (state, { error }) => ({ ...state,error: error })),

  on(UserActions.deleteUserSuccess, (state, { id }) => ({ ...state, users: state.users.filter(u => u.userID !== id) })),
  on(UserActions.deleteUserFailure, (state, { error }) => ({ ...state, error })),
);
