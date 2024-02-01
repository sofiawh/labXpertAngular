import {createAction, props} from '@ngrx/store';
import {Patient} from "../../../types/patient/patient";

export const addPatient = createAction('[Patient] Add Patient', props<{ patient: Patient }>());
export const updatePatient = createAction('[Patient] Update Patient', props<{ patient: Patient }>());
export const deletePatient = createAction('[Patient] Delete Patient', props<{ patientId: number }>());
