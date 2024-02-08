import { Sample } from "../sample/sample";
import { AnalysisStatus } from "./analysis-status";
import { ResultStatus } from "./result-status";

export interface Analysis {
    analysisID : number,
    startDate: Date,
    endDate: Date,
    comments: string,
    analysisStatus: AnalysisStatus,
    resultStatus: ResultStatus,
    sampleDTO: Sample,
}