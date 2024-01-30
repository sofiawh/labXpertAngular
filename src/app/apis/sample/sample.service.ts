import {Injectable} from '@angular/core';
import {Sample} from 'src/app/types/sample/sample';
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
export class SampleService {

  private samples: Sample[] = [];
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
  getSamples(): Observable<Sample[]> {
    return this.http.get<Sample[]>(this.apiUrl + '/api/v1/samples');
  }

  getSample(id: number): Observable<Sample> {
    return this.http.get<Sample>(this.apiUrl + '/api/v1/samples/' + id);
  }


  addSample(sample: Sample): Observable<Sample> {
    return this.http.post<Sample>(this.apiUrl + '/api/v1/samples', sample);
  }

  deleteSample(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/api/v1/samples/' + id, {responseType: 'text' as 'json'});
  }

  updateSample(sample: Sample): Observable<Sample> {
    return this.http.put<Sample>(this.apiUrl + '/api/v1/samples/' + sample.sampleID, sample);
  }
}
