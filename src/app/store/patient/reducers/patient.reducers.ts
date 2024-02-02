import { createReducer, on } from '@ngrx/store';
import * as PatientActions from '../actions/patient.actions';
import { Patient } from 'src/app/types/patient/patient';

/**
 * Patient state
 * @interface
 */
export interface PatientState {
  patients: Patient[];
  error: any;
}

/**
 * Initial state
 */
export const initialState: PatientState = {
  patients: [],
  error: null,
};
/**
 * Patient reducer
 * @function
 * @param {PatientState} state
 * @param {PatientActions} action
 * @returns {PatientState}
 */
export const patientReducer = createReducer(
  initialState,
  on(PatientActions.loadPatientsSuccess, (state, { patients }) => ({ ...state, patients })),
  on(PatientActions.loadPatientsFailure, (state, { error }) => ({ ...state, error })),

  on(PatientActions.addPatientSuccess, (state, { patient }) => ({ ...state, patients: [...state.patients, patient] })),
  on(PatientActions.addPatientFailure, (state, { error }) => ({ ...state, error })),

  on(PatientActions.editPatientSuccess, (state, { patient }) => ({
    ...state,
    patients: state.patients.map(p => (p.patientID === patient.patientID ? patient : p)) })),

  on(PatientActions.deletePatientSuccess, (state, { id }) => ({ ...state, patients: state.patients.filter(s => s.patientID !== id) })),
  on(PatientActions.deletePatientFailure, (state, { error }) => ({ ...state, error })),
);








// import {Patient} from "../../../types/patient/patient";
// import {addPatient, updatePatient, deletePatient} from "../actions/patient.actions";
//
// export interface AppState {
//   patients: Patient[];
// }
//
// export const initialState: AppState = {
//   patients: []
// };
//
// export function patientReducers(state = initialState, action: any): AppState {
//   switch (action.type) {
//     case addPatient.type:
//       return {
//         ...state, patients: [...state.patients, action.patient]
//       };
//     case updatePatient.type:
//       return {
//         ...state,
//         patients: state.patients.map(patient => (patient.patientID === action.patient.patientID ? action.patient : patient))
//       };
//     case deletePatient.type:
//       return {...state, patients: state.patients.filter(patient => patient.patientID !== action.id)};
//     default:
//       return state;
//   }
// }
