import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as UserActions from 'src/app/store/user/actions/user.actions';
import { UserService } from 'src/app/apis/user/user.service';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() =>
        this.userService.getAllUsers().pipe(
          map(users => UserActions.loadUsersSuccess({ users }))
        )
      )
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.createUser),
      mergeMap(action =>
        this.userService.createUser(action.user).pipe(
          map(newUser => UserActions.loadUsers()), // Reload users after creating a new one
          catchError(error => of(UserActions.createUserFailure({ error }))))
        )
      )
    );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUser),
      mergeMap(action =>
        this.userService.updateUser(action.user, action.user.userId).pipe(
          map(updatedUser => UserActions.loadUsers()), // Reload users after updating one
          catchError(error => of(UserActions.updateUserFailure({ error }))))
        )
      )
    )
  ;

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteUser),
      mergeMap(action =>
        this.userService.deleteUser(action.id).pipe(
          map(() => UserActions.loadUsers()), // Reload users after deleting one
          catchError(error => of(UserActions.deleteUserFailure({ error })))
        )
      )
    )
  );

  // Add more effects for create, update, and delete actions

  constructor(private actions$: Actions, private userService: UserService) {}
}
