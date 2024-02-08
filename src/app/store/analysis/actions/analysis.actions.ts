import { createAction, props } from '@ngrx/store';
import { Analysis } from 'src/app/types/analysis/analysis';

/**
 * Analysis actions
 * @class
 * @author : Mariam Laghfiri
 */
export const loadAnalysis = createAction('[Analysis] Load Analysis');
export const loadAnalysisSuccess = createAction('[Analysis] Load Analysis Success', props<{ analysis: Analysis[] }>());
export const loadAnalysisFailure = createAction('[Analysis] Load Analysis Failure', props<{ error: any }>());
