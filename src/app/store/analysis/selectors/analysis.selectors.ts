import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AnalysisState } from '../reducers/analysis.reducers';

/**
 * Analysis state
 * @interface
 * @Author : mariam Laghfiri
 */
export const selectAnalysisState = createFeatureSelector<AnalysisState>('analysis');

export const selectAnalysis = createSelector(
  selectAnalysisState,
  (state) => state.analysis
);

export const selectError = createSelector(
  selectAnalysisState,
  (state) => state.error
);
