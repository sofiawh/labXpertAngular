import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, tap } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as ReagentActions from '../actions/reagent.actions';
import { ReagentService } from 'src/app/apis/reagent/reagent.service';

/**
 * Reagent effects
 * @class
 * @Author : Ayoub ait si ahmad
 */
@Injectable()
export class ReagentEffects {
  loadReagents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReagentActions.loadReagents),
      switchMap(() =>
        this.reagentService.getReagents().pipe(
          map((reagents) => ReagentActions.loadReagentsSuccess({ reagents })),
          catchError((error) => of(ReagentActions.loadReagentsFailure({ error })))
        )
      )
    )
  );

  addReagent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReagentActions.addReagent),
      switchMap(({ reagent }) =>
        this.reagentService.addReagent(reagent).pipe(
          map((addedReagent) => ReagentActions.addReagentSuccess({ reagent: addedReagent })),
          catchError((error) => of(ReagentActions.addReagentFailure({ error })))
        )
      )
    )
  );

  editReagent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReagentActions.editReagent),
      switchMap(({ reagent }) =>
        this.reagentService.updateReagent(reagent).pipe(
          map((editedReagent) => ReagentActions.editReagentSuccess({ reagent: editedReagent })),
          catchError((error) => of(ReagentActions.editReagentFailure({ error })))
        )
      )
    )
  );

  deleteReagent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReagentActions.deleteReagent),
      switchMap(({ id }) =>
        this.reagentService.deleteReagent(id).pipe(
          map(() => ReagentActions.deleteReagentSuccess({ id })),
          catchError((error) => of(ReagentActions.deleteReagentFailure({ error })))
        )
      )
    )
  );


  constructor(private actions$: Actions, private reagentService: ReagentService) {}
}
