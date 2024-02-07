import {createAction, props} from '@ngrx/store';
import {Scheduling} from "src/app/types/scheduling/scheduling";

/**
 * Scheduling actions
 * @class
 * @Author : sofia
 */
export const loadSchedulings = createAction('[Scheduling] Load Schedulings');
export const loadSchedulingsSuccess = createAction('[Scheduling] Load Schedulings Success', props<{ schedulings: Scheduling[] }>());
export const loadSchedulingsFailure = createAction('[Scheduling] Load Schedulings Failure', props<{ error: any }>());

export const addScheduling = createAction('[Scheduling] Add Scheduling', props<{ scheduling: Scheduling }>());
export const addSchedulingSuccess = createAction('[Scheduling] Add Scheduling Success', props<{ scheduling: Scheduling }>());
export const addSchedulingFailure = createAction('[Scheduling] Add Scheduling Failure', props<{ error: any }>());

export const deleteScheduling = createAction('[Scheduling] Delete Scheduling', props<{ id: number }>());
export const deleteSchedulingSuccess = createAction('[Scheduling] Delete Scheduling Success', props<{ id: number }>());
export const deleteSchedulingFailure = createAction('[Scheduling] Delete Scheduling Failure', props<{ error: any }>());

export const editScheduling = createAction('[Scheduling] Edit Scheduling', props<{ scheduling: Scheduling }>());

export const editSchedulingSuccess = createAction('[Scheduling] Edit Scheduling Success', props<{ scheduling: Scheduling }>());

export const editSchedulingFailure = createAction('[Scheduling] Edit Scheduling Failure', props<{ error: any }>());

/*
export const addPatient = createAction('[Patient] Add Patient', props<{ patient: Patient }>());
export const updatePatient = createAction('[Patient] Update Patient', props<{ patient: Patient }>());
export const deletePatient = createAction('[Patient] Delete Patient', props<{ patientId: number }>());
*/
