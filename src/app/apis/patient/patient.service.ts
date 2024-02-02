import {Injectable} from '@angular/core';
import {Patient} from 'src/app/types/patient/patient';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

/**
 * Sample service
 * @class
 * @Author : Ayoub ait si ahmad
 */
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private patients: Patient[] = [];
  private apiUrl = 'http://localhost:9090';

  /**
   * The constructor Loaded before the ngOnInit() method
   */
  constructor(private http: HttpClient) {
  }

  // CRUD
  /*
   * The work of observable is to wait for the response from the server
   */
  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl + '/api/v1/patients');
  }

  getPatient(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.apiUrl + '/api/v1/patients/' + id);
  }


  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl + '/api/v1/patients', patient);
  }

  deletePatient(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/api/v1/patients/' + id, {responseType: 'text' as 'json'});
  }

  updatePatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(this.apiUrl + '/api/v1/patients/' + patient.patientID, patient);
  }
}
