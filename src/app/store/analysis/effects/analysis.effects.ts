import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as AnalysisActions from '../actions/analysis.actions';
import { AnalysisService } from 'src/app/apis/Analysis/analysis.service';

/**
 * Analysis effects
 * @class
 * @Author : mariam Laghfiri
 */
@Injectable()
export class AnalysisEffects {
  loadAnalysis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AnalysisActions.loadAnalysis),
      switchMap(() =>
        this.analysisService.getAllAnalysis().pipe(
          map((analysis) => AnalysisActions.loadAnalysisSuccess({ analysis })),
          catchError((error) => of(AnalysisActions.loadAnalysisFailure({ error })))
        )
      )
    )
  );
  constructor(private actions$: Actions, private analysisService: AnalysisService) {}

}