import { createReducer, on } from '@ngrx/store';
import * as SchedulingActions from '../actions/scheduling.actions';
//import { Scheduling } from 'src/app/types/scheduling/scheduling';
import {Scheduling} from "../../../types/scheduling/scheduling";

/**
 * Scheduling state
 * @interface
 */
export interface SchedulingState {
  schedulings: Scheduling[];
  error: any;
}

/**
 * Initial state
 */
export const initialState: SchedulingState = {
  schedulings: [],
  error: null,
};
/**
 * Patient reducer
 * @function
 * @param {SchedulingState} state
 * @param {SchedulingActions} action
 * @returns {SchedulingState}
 */
export const schedulingReducer = createReducer(
  initialState,
  on(SchedulingActions.loadSchedulingsSuccess, (state, { schedulings }) => ({ ...state, schedulings })),
  on(SchedulingActions.loadSchedulingsFailure, (state, { error }) => ({ ...state, error })),

  on(SchedulingActions.addSchedulingSuccess, (state, { scheduling }) => ({ ...state, schedulings: [...state.schedulings, scheduling] })),
  on(SchedulingActions.addSchedulingFailure, (state, { error }) => ({ ...state, error })),

  on(SchedulingActions.editSchedulingSuccess, (state, { scheduling }) => ({
    ...state,
    schedulings: state.schedulings.map(p => (p.schedulingID === scheduling.schedulingID ? scheduling : p)) })),

  on(SchedulingActions.deleteSchedulingSuccess, (state, { id }) => ({ ...state, schedulings: state.schedulings.filter(s => s.schedulingID !== id) })),
  on(SchedulingActions.deleteSchedulingFailure, (state, { error }) => ({ ...state, error })),
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
