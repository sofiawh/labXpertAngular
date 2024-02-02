import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, tap } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as UserActions from '../actions/user.actions';
import { UserService } from 'src/app/apis/user/user.service';

/**
 * User effects
 * @class
 * @Author : Mariam Laghfiri
 */
@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map((users) => UserActions.loadUsersSuccess({ users })),
          catchError((error) => of(UserActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.addUser),
      switchMap(({ user }) =>
        this.userService.addUser(user).pipe(
          map((addedUser) => UserActions.addUserSuccess({ user: addedUser })),
          catchError((error) => of(UserActions.addUserFailure({ error })))
        )
      )
    )
  );

  editUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.editUser),
      switchMap(({ user }) =>
        this.userService.updateUser(user).pipe(
          map((editedUser) => UserActions.editUserSuccess({ user: editedUser })),
          catchError((error) => of(UserActions.editUserFailure({ error })))
        )
      )
    )
  );


  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteUser),
      switchMap(({ id }) =>
        this.userService.deleteUser(id).pipe(
          map(() => UserActions.deleteUserSuccess({ id })),
          catchError((error) => of(UserActions.deleteUserFailure({ error })))
        )
      )
    )
  );


  constructor(private actions$: Actions, private userService: UserService) { }
}
