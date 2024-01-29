import {AnalysisType} from "../analysis/analysis-type";
import {User} from "../user/user";
/*
intref
@Author : Ayoub
*/
export interface Sample {
  sampleId: number,
  analysisType: AnalysisType,
  sampleDescription: string,
  collectionDate: Date,
  userDTO: User
// TODO: @Ayoub add analyse
}
