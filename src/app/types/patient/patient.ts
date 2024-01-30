import { Gender } from "./gender";

export interface Patient {
  patientID: number,
  address: string,
  dateOfBirth: Date,
  firstName: string,
  gender: Gender,
  lastName: string,
  patientEmail: string,
  phoneNumber: string
}
