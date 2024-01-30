import {AnalysisType} from "../analysis/analysis-type";
import {Patient} from "../patient/patient";
import {User} from "../user/user";
import {SampleStatus} from "./sample-status";

/**
 * Sample interface
 * @Author: Ayoub ait si ahmad
 */
export interface Sample {
  sampleId: number,
  analysisType: AnalysisType,
  sampleStatus: SampleStatus
  sampleDescription: string,
  collectionDate: Date,
  patientDTO: Patient
}
