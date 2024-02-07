import {Priorite} from "./priorite";

export interface Scheduling {
  // analysisDTO	AnalysisDTO
  endDateAndTime: Date,//string($date)
  notes: string,
  priority: Priorite,
  schedulingID: number,
  startDateAndTime: Date
  //userDTO	UserDTO{...}


}
