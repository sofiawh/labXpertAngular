import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SampleComponent} from "./sample/sample.component";
import { HomeComponent } from './home/home.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { UserComponent } from './user/user.component';
import { ReagentComponent } from './reagent/reagent.component';
import { PatientComponent } from './patient/patient.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { AnalysesComponent } from './analyses/analyses.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    SampleComponent,
    HomeComponent,
    UserComponent,
    ReagentComponent,
    PatientComponent,
    SchedulingComponent,
    AnalysesComponent,
    ResultComponent
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
