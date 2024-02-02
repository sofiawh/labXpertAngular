import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {of, tap} from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as PatientActions from '../actions/patient.actions';
import { PatientService } from 'src/app/apis/patient/patient.service';

/**
 * Patient effects
 * @class
 * @Author :
 */
@Injectable()
export class PatientEffects {
  loadPatients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PatientActions.loadPatients),
      switchMap(() =>
        this.patientService.getPatients().pipe(
          tap((patients: any) => console.log('Patients loaded:', patients)),
          map((patients) => PatientActions.loadPatientsSuccess({ patients })),
          catchError((error) => /*of(PatientActions.loadPatientsFailure({ error })))*/
          {
            console.error('Error loading patients:', error);
            return of(PatientActions.loadPatientsFailure({ error }));
          })
        )
      )
    )
  );


  addPatient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PatientActions.addPatient),
      switchMap(({ patient }) =>
        this.patientService.addPatient(patient).pipe(
          map((addedPatient) => PatientActions.addPatientSuccess({ patient: addedPatient })),
          catchError((error) => of(PatientActions.addPatientFailure({ error })))
        )
      )
    )
  );

  editPatient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PatientActions.editPatient),
      switchMap(({ patient }) =>
        this.patientService.updatePatient(patient).pipe(
          map((editedPatient) => PatientActions.editPatientSuccess({ patient: editedPatient })),
          catchError((error) => of(PatientActions.editPatientFailure({ error })))
        )
      )
    )
  );

  deletePatient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PatientActions.deletePatient),
      switchMap(({ id }) =>
        this.patientService.deletePatient(id).pipe(
          map(() => PatientActions.deletePatientSuccess({ id })),
          catchError((error) => of(PatientActions.deletePatientFailure({ error })))
        )
      )
    )
  );


  constructor(private actions$: Actions, private patientService: PatientService) {}
}
