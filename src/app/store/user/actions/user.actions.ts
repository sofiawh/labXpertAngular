import {createAction, props} from '@ngrx/store';
import {User} from "../../../types/user/user";

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[] }>());
export const createUser = createAction('[User] Create User', props<{ user: User }>());
export const updateUser = createAction('[User] Update User', props<{ user: User }>());
export const deleteUser = createAction('[User] Delete User', props<{ id: number }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: any }>());
export const createUserFailure = createAction('[User] Create User Failure', props<{ error: any }>());
export const updateUserFailure = createAction('[User] Update User Failure', props<{ error: any }>());
export const deleteUserFailure = createAction('[User] Delete User Failure', props<{ error: any }>());
