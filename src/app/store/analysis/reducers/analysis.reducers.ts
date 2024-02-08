import { createReducer, on } from '@ngrx/store';
import * as AnalysisActions from '../actions/analysis.actions';
import { Analysis } from 'src/app/types/analysis/analysis';

/**
 * Analysis state
 * @interface
 */
export interface AnalysisState {
    analysis: Analysis[];
  error: any;
}

/**
 * Initial state
 */
export const initialState: AnalysisState = {
  analysis: [],
  error: null,
};

export const AnalysisReducer = createReducer(
  initialState,
  on(AnalysisActions.loadAnalysisSuccess, (state, { analysis }) => ({ ...state, analysis })),
  on(AnalysisActions.loadAnalysisFailure, (state, { error }) => ({ ...state, error })),
);
