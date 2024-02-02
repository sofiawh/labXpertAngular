import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ReagentState } from '../reducers/reagent.reducers';

/**
 * Reagent state
 * @interface
 * @Author : Mariam Laghfiri
 */
export const selectReagentState = createFeatureSelector<ReagentState>('reagents');

export const selectReagents = createSelector(
  selectReagentState,
  (state) => state.reagents
);

export const selectError = createSelector(
  selectReagentState,
  (state) => state.error
);
