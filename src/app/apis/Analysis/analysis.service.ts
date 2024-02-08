import { Injectable } from '@angular/core';
import { Analysis } from 'src/app/types/analysis/analysis';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {


  private analysis: Analysis[] = [];
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
  getAllAnalysis(): Observable<Analysis[]> {
    return this.http.get<Analysis[]>(this.apiUrl + '/api/v1/analysis');
  }

  getAnalysis(id: number): Observable<Analysis> {
    return this.http.get<Analysis>(this.apiUrl + '/api/v1/analysis/' + id);
  }
}
