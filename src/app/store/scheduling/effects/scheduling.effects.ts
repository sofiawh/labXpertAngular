import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {of, tap} from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as SchedulingActions from '../actions/scheduling.actions';
import { SchedulingService } from 'src/app/apis/scheduling/scheduling.service';

/**
 * Patient effects
 * @class
 * @Author : sofia
 */
@Injectable()
export class SchedulingEffects {
  loadSchedulings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SchedulingActions.loadSchedulings),
      switchMap(() =>
        this.schedulingService.getSchedulings().pipe(
          tap((schedulings: any) => console.log('Schedulings loaded:', schedulings)),
          map((schedulings) => SchedulingActions.loadSchedulingsSuccess({ schedulings })),
          catchError((error) =>
          {
            console.error('Error loading schedulings:', error);
            return of(SchedulingActions.loadSchedulingsFailure({ error }));
          })
        )
      )
    )
  );


  addScheduling$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SchedulingActions.addScheduling),
      switchMap(({ scheduling }) =>
        this.schedulingService.addScheduling(scheduling).pipe(
          map((addedScheduling) => SchedulingActions.addSchedulingSuccess({ scheduling: addedScheduling })),
          catchError((error) => of(SchedulingActions.addSchedulingFailure({ error })))
        )
      )
    )
  );

  editScheduling$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SchedulingActions.editScheduling),
      switchMap(({ scheduling }) =>
        this.schedulingService.updateScheduling(scheduling).pipe(
          map((editedScheduling) => SchedulingActions.editSchedulingSuccess({ scheduling: editedScheduling })),
          catchError((error) => of(SchedulingActions.editSchedulingFailure({ error })))
        )
      )
    )
  );

  deleteScheduling$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SchedulingActions.deleteScheduling),
      switchMap(({ id }) =>
        this.schedulingService.deleteScheduling(id).pipe(
          map(() => SchedulingActions.deleteSchedulingSuccess({ id })),
          catchError((error) => of(SchedulingActions.deleteSchedulingFailure({ error })))
        )
      )
    )
  );


  constructor(private actions$: Actions, private schedulingService: SchedulingService) {}
}
