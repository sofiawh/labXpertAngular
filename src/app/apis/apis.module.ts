import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {SampleService} from "./sample/sample.service";
import {PatientService} from "./patient/patient.service";





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule/*,
    SampleService,
    PatientService*/
  ]/*,
  providers: [SampleService, PatientService],  // Ajoutez PatientService aux providers
*/
})
export class ApisModule { }
