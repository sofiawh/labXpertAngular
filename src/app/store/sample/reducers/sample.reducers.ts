import { createReducer, on } from '@ngrx/store';
import * as SampleActions from '../actions/sample.actions';
import { Sample } from 'src/app/types/sample/sample';

/**
 * Sample state
 * @interface
 */
export interface SampleState {
  samples: Sample[];
  error: any;
}

/**
 * Initial state
 */
export const initialState: SampleState = {
  samples: [],
  error: null,
};
/**
 * Sample reducer
 * @function
 * @param {SampleState} state
 * @param {SampleActions} action
 * @returns {SampleState}
 */
export const sampleReducer = createReducer(
  initialState,
  on(SampleActions.loadSamplesSuccess, (state, { samples }) => ({ ...state, samples })),
  on(SampleActions.loadSamplesFailure, (state, { error }) => ({ ...state, error })),

  on(SampleActions.addSampleSuccess, (state, { sample }) => ({ ...state, samples: [...state.samples, sample] })),
  on(SampleActions.addSampleFailure, (state, { error }) => ({ ...state, error })),

  on(SampleActions.deleteSampleSuccess, (state, { id }) => ({ ...state, samples: state.samples.filter(s => s.sampleID !== id) })),
  on(SampleActions.deleteSampleFailure, (state, { error }) => ({ ...state, error })),
);
