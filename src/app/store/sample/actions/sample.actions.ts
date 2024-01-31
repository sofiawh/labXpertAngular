import {createAction, props} from '@ngrx/store';
import {Sample} from "../../../types/sample/sample";

export const loadSamples = createAction(
  '[Sample] Load Samples'
);
export const loadSamplesSuccess = createAction(
  '[Sample] Load Samples Success',
  props<{ samples: Sample[] }>()
);

export const loadSamplesFailure = createAction(
  '[Sample] Load Samples Failure',
  props<{ error: any }>()
);

