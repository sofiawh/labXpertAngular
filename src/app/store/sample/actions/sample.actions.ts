import {createAction, props} from '@ngrx/store';
import {Sample} from "../../../types/sample/sample";

export const addSample = createAction('[Sample] Add Sample', props<{ sample: Sample }>());
export const updateSample = createAction('[Sample] Update Sample', props<{ sample: Sample }>());
export const deleteSample = createAction('[Sample] Delete Sample', props<{ sampleId: number }>());
