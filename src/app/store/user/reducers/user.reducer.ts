import {User} from "../../../types/user/user";
import { createReducer, on } from '@ngrx/store';
import * as UserActions from 'src/app/store/user/actions/user.actions';

export interface UserState {
  users: User[];
  error: any;
}

export const initialState: UserState = {
  users: [],
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users, error: null })),
  on(UserActions.createUserFailure, (state, { error }) => ({ ...state, error })),
  on(UserActions.updateUserFailure, (state, { error }) => ({ ...state, error })),
  on(UserActions.deleteUserFailure, (state, { error }) => ({ ...state, error }))
);


