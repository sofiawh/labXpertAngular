import { createAction, props } from '@ngrx/store';
import { Sample } from 'src/app/types/sample/sample';

/**
 * Sample actions
 * @class
 * @Author : Ayoub ait si ahmad
 */
export const loadSamples = createAction('[Sample] Load Samples');
export const loadSamplesSuccess = createAction('[Sample] Load Samples Success', props<{ samples: Sample[] }>());
export const loadSamplesFailure = createAction('[Sample] Load Samples Failure', props<{ error: any }>());

export const addSample = createAction('[Sample] Add Sample', props<{ sample: Sample }>());
export const addSampleSuccess = createAction('[Sample] Add Sample Success', props<{ sample: Sample }>());
export const addSampleFailure = createAction('[Sample] Add Sample Failure', props<{ error: any }>());

export const deleteSample = createAction('[Sample] Delete Sample', props<{ id: number }>());
export const deleteSampleSuccess = createAction('[Sample] Delete Sample Success', props<{ id: number }>());
export const deleteSampleFailure = createAction('[Sample] Delete Sample Failure', props<{ error: any }>());

