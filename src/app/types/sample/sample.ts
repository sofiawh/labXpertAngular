import {AnalysisType} from "../analysis/analysis-type";
import {User} from "../user/user";

export interface Sample {
  sampleId: number,
  analysisType: AnalysisType,
  sampleDescription: string,
  collectionDate: Date,
  userDTO: User
}
