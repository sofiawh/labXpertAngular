import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as SampleActions from '../actions/sample.actions';
import { SampleService } from 'src/app/apis/sample/sample.service';

/**
 * Sample effects
 * @class
 * @Author : Ayoub ait si ahmad
 */
@Injectable()
export class SampleEffects {
  loadSamples$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SampleActions.loadSamples),
      switchMap(() =>
        this.sampleService.getSamples().pipe(
          map((samples) => SampleActions.loadSamplesSuccess({ samples })),
          catchError((error) => of(SampleActions.loadSamplesFailure({ error })))
        )
      )
    )
  );

  addSample$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SampleActions.addSample),
      switchMap(({ sample }) =>
        this.sampleService.addSample(sample).pipe(
          map((addedSample) => SampleActions.addSampleSuccess({ sample: addedSample })),
          catchError((error) => of(SampleActions.addSampleFailure({ error })))
        )
      )
    )
  );

  deleteSample$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SampleActions.deleteSample),
      switchMap(({ id }) =>
        this.sampleService.deleteSample(id).pipe(
          map(() => SampleActions.deleteSampleSuccess({ id })),
          catchError((error) => of(SampleActions.deleteSampleFailure({ error })))
        )
      )
    )
  );


  constructor(private actions$: Actions, private sampleService: SampleService) {}
}
