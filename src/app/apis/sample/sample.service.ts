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

  addSample(sample: Sample): void {
    this.samples.push(sample);
  }

  deleteSample(id: number): void {
    let index = this.samples.findIndex(s => s.sampleId === id);
    this.samples.splice(index, 1);
  }

  updateSample(sample: Sample): void {
    let index = this.samples.findIndex(s => s.sampleId === sample.sampleId);
    this.samples[index] = sample;
  }
}
