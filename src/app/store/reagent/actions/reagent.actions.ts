import { createAction, props } from '@ngrx/store';
import { Reagent } from 'src/app/types/reagent/reagent';

/**
 * Reagent actions
 * @class
 * @Author : Mariam Laghfiri
 */
export const loadReagents = createAction('[Reagent] Load Reagents');
export const loadReagentsSuccess = createAction('[Reagent] Load Reagents Success', props<{ reagents: Reagent[] }>());
export const loadReagentsFailure = createAction('[Reagent] Load Reagents Failure', props<{ error: any }>());

export const addReagent = createAction('[Reagent] Add Reagent', props<{ reagent: Reagent }>());
export const addReagentSuccess = createAction('[Reagent] Add Reagent Success', props<{ reagent: Reagent }>());
export const addReagentFailure = createAction('[Reagent] Add Reagent Failure', props<{ error: any }>());

export const deleteReagent = createAction('[Reagent] Delete Reagent', props<{ id: number }>());
export const deleteReagentSuccess = createAction('[Reagent] Delete Reagent Success', props<{ id: number }>());
export const deleteReagentFailure = createAction('[Reagent] Delete Reagent Failure', props<{ error: any }>());

export const editReagent = createAction('[Reagent] Edit Reagent', props<{reagent: Reagent}>());
export const editReagentSuccess = createAction('[Reagent] Edit Reagent Success', props<{reagent: Reagent }>());
export const editReagentFailure = createAction('[Reagent] Edit Reagent Failure', props<{ error: any }>());