import { createReducer, on } from '@ngrx/store';
import * as ReagentActions from '../actions/reagent.actions';
import { Reagent } from 'src/app/types/reagent/reagent';

/**
 * Reagent state
 * @interface
 * @author Mariam Laghfiri
 */
export interface ReagentState {
  reagents: Reagent[];
  error: any;
}

/**
 * Initial state
 */
export const initialState: ReagentState = {
  reagents: [],
  error: null,
};
/**
 * Reagent reducer
 * @function
 * @param {ReagentState} state
 * @param {ReagentActions} action
 * @returns {ReagentState}
 */
export const reagentReducer = createReducer(
  initialState,
  on(ReagentActions.loadReagentsSuccess, (state, { reagents }) => ({ ...state, reagents })),
  on(ReagentActions.loadReagentsFailure, (state, { error }) => ({ ...state, error })),

  on(ReagentActions.addReagentSuccess, (state, { reagent }) => ({ ...state, reagents: [...state.reagents, reagent] })),
  on(ReagentActions.addReagentFailure, (state, { error }) => ({ ...state, error })),

  on(ReagentActions.editReagentSuccess, (state, { reagent }) => ({...state, reagents: state.reagents.map(p => (p.reagentID === reagent.reagentID ? reagent : p)) })),
  on(ReagentActions.editReagentFailure, (state, { error }) => ({ ...state, error })),

  on(ReagentActions.deleteReagentSuccess, (state, { id }) => ({ ...state, reagents: state.reagents.filter(s => s.reagentID !== id) })),
  on(ReagentActions.deleteReagentFailure, (state, { error }) => ({ ...state, error })),
);
