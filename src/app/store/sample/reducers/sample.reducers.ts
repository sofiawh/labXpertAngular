import {Sample} from "../../../types/sample/sample";
import {loadSamples,loadSamplesSuccess,loadSamplesFailure} from "../actions/sample.actions";
import {createReducer, on} from "@ngrx/store";
export interface AppState {
  samples: Sample[];
}

export const initialState: AppState = {
  samples: []
};

export const sampleReducer = createReducer(
  initialState,
  on(loadSamples, state => state),
  on(loadSamplesSuccess, (state, {samples}) => ({...state, samples: samples})),
  on(loadSamplesFailure, state => state)
);
