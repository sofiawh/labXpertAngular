import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PatientState } from '../reducers/patient.reducers';

/**
 * Patient state
 * @interface
 * @Author :
 */
export const selectPatientState = createFeatureSelector<PatientState>('patients');

export const selectPatients = createSelector(
  selectPatientState,
  (state) => state.patients
);

export const selectError = createSelector(
  selectPatientState,
  (state) => state.error
);




//
// import { createSelector } from '@ngrx/store';
// import { AppState } from '../reducers/patient.reducers';
//
// export const selectPatients = (state: AppState) => state.patients;
//
// export const selectPatientById = (id: number) =>
//   createSelector(selectPatients, patients => patients.find(patient => patient.patientID === id));
