import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Patient} from "../../models/patient.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class patientService {

  constructor(private http: HttpClient) {
  }

  getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>('http://localhost:9090/api/v1/patients');
  }
}
