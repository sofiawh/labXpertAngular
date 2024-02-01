import {AnalysisType} from "../analysis/analysis-type";
import {Patient} from "../patient/patient";
import {SampleStatus} from "./sample-status";

/**
 * Sample interface
 * @Author: Ayoub ait si ahmad
 */
export interface Sample {
  sampleID: number,
  analysisType: AnalysisType,
  sampleStatus: SampleStatus,
  sampleDescription: string,
  collectionDate: Date,
  patientDTO: Patient
}
