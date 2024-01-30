import {Sample} from "../../../types/sample/sample";
import {addSample, updateSample, deleteSample} from "../actions/sample.actions";

export interface AppState {
  samples: Sample[];
}

export const initialState: AppState = {
  samples: []
};

export function sampleReducers(state = initialState, action: any): AppState {
  switch (action.type) {
    case addSample.type:
      return {
        ...state, samples: [...state.samples, action.sample]
      };
    case updateSample.type:
      return {
        ...state,
        samples: state.samples.map(sample => (sample.sampleID === action.sample.sampleID ? action.sample : sample))
      };
    case deleteSample.type:
      return {...state, samples: state.samples.filter(sample => sample.sampleID !== action.id)};
    default:
      return state;
  }
}
