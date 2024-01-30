
import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/sample.reducers';

export const selectSamples = (state: AppState) => state.samples;

export const selectSampleById = (id: number) =>
  createSelector(selectSamples, samples => samples.find(sample => sample.sampleID === id));
