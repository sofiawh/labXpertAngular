import {Injectable} from '@angular/core';
import {Scheduling} from 'src/app/types/scheduling/scheduling';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
//import {Scheduling} from "../../types/scheduling/scheduling";

/**
 * Scheduling service
 * @class
 * @Author : sofia
 */
@Injectable({
  providedIn: 'root'
})
export class SchedulingService {

  private schedulings: Scheduling[] = [];
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
  getSchedulings(): Observable<Scheduling[]> {
    return this.http.get<Scheduling[]>(this.apiUrl + '/api/v1/schedulings');
  }

  getScheduling(id: number): Observable<Scheduling> {
    return this.http.get<Scheduling>(this.apiUrl + '/api/v1/schedulings/' + id);
  }


  addScheduling(scheduling: Scheduling): Observable<Scheduling> {
    return this.http.post<Scheduling>(this.apiUrl + '/api/v1/schedulings', scheduling);
  }

  deleteScheduling(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/api/v1/schedulings/' + id, {responseType: 'text' as 'json'});
  }

  updateScheduling(scheduling: Scheduling): Observable<Scheduling> {
    return this.http.put<Scheduling>(this.apiUrl + '/api/v1/schedulings/' + scheduling.schedulingID, scheduling);
  }
}
