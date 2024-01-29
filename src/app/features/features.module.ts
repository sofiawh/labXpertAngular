import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SampleComponent} from "./sample/sample.component";
import { HomeComponent } from './home/home.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { PatientComponent } from './patient/patient.component';
import { SchedulingComponent } from './scheduling/scheduling.component';


@NgModule({
  declarations: [
    SampleComponent,
    HomeComponent,
    PatientComponent,
    SchedulingComponent
  ],
  exports: [
    SampleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FeaturesModule { }
