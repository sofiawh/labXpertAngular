import {Patient} from "../../../types/patient/patient";
import {addPatient, updatePatient, deletePatient} from "../actions/patient.actions";

export interface AppState {
  patients: Patient[];
}

export const initialState: AppState = {
  patients: []
};

export function patientReducers(state = initialState, action: any): AppState {
  switch (action.type) {
    case addPatient.type:
      return {
        ...state, patients: [...state.patients, action.patient]
      };
    case updatePatient.type:
      return {
        ...state,
        patients: state.patients.map(patient => (patient.patientID === action.patient.patientID ? action.patient : patient))
      };
    case deletePatient.type:
      return {...state, patients: state.patients.filter(patient => patient.patientID !== action.id)};
    default:
      return state;
  }
}
