import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SchedulingState } from '../reducers/scheduling.reducers';
import {SchedulingComponent} from "../../../features/scheduling/scheduling.component";

/**
 * scheduling state
 * @interface
 * @Author :
 */
export const selectSchedulingState = createFeatureSelector<SchedulingState>('schedulings');

export const selectSchedulings = createSelector(
  selectSchedulingState,
  (state) => state.schedulings
);

export const selectError = createSelector(
  selectSchedulingState,
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
