
import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/patient.reducers';

export const selectPatients = (state: AppState) => state.patients;

export const selectPatientById = (id: number) =>
  createSelector(selectPatients, patients => patients.find(patient => patient.patientID === id));
