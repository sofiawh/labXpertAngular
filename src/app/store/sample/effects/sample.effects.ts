import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {EMPTY} from "rxjs";
import { catchError, map, exhaustMap,mergeMap, tap } from 'rxjs/operators';
import {loadSamples,loadSamplesSuccess,loadSamplesFailure} from '../actions/sample.actions';
import { SampleService} from "../../../apis/sample/sample.service";

@Injectable()
export class SampleEffects {
  /*
  loadSamples$ = createEffect(() => this.actions$.pipe(
    ofType(loadSamples),
    mergeMap(() => this.sampleService.getSamples()
      .pipe(
        tap(samples => console.log("hnaaa effects",samples)), // Add this line
        map(samples => loadSamplesSuccess({samples})), // Adjust this line
        catchError(error => of(loadSamplesFailure({error}))))
    )
  ));

   */

  loadSamples$ = createEffect(() => this.actions$.pipe(
      ofType(loadSamples),
      exhaustMap(() => this.sampleService.getSamples()
        .pipe(
          map(samples => loadSamplesSuccess({ samples })),
          catchError(() => EMPTY)
        ))
    )
  );


  constructor(private actions$: Actions, private sampleService: SampleService) {}
}
