import { Injectable } from '@angular/core';
import {Reagent} from 'src/app/types/reagent/reagent';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

/**
 * Reagent service
 * @class
 * @Author : Mariam Laghfiri
 */

@Injectable({
  providedIn: 'root'
})
export class ReagentService {
  private reagents: Reagent[] = [];
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
  getReagents(): Observable<Reagent[]> {
    return this.http.get<Reagent[]>(this.apiUrl + '/api/v1/reagents');
  }

  getReagent(id: number): Observable<Reagent> {
    return this.http.get<Reagent>(this.apiUrl + '/api/v1/reagents/' + id);
  }

  addReagent(reagent: Reagent): Observable<Reagent> {
    return this.http.post<Reagent>(this.apiUrl + '/api/v1/reagents', reagent);
  }

  deleteReagent(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/api/v1/reagents/' + id, {responseType: 'text' as 'json'});
  }

  updateReagent(reagent: Reagent): Observable<Reagent> {
    return this.http.put<Reagent>(this.apiUrl + '/api/v1/reagents/' + reagent.reagentID, reagent);
  }
}
