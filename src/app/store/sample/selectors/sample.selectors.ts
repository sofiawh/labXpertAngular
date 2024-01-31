import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SampleState } from '../reducers/sample.reducers';

/**
 * Sample state
 * @interface
 * @Author : Ayoub ait si ahmad
 */
export const selectSampleState = createFeatureSelector<SampleState>('samples');

export const selectSamples = createSelector(
  selectSampleState,
  (state) => state.samples
);

export const selectError = createSelector(
  selectSampleState,
  (state) => state.error
);
