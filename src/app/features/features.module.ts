import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SampleComponent} from "./sample/sample.component";
import { HomeComponent } from './home/home.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { PatientComponent } from './patient/patient.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import {LayoutComponent} from "../core/components/layout/layout.component";
import {RouterModule} from "@angular/router";
import {CoreModule} from "../core/core.module";
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    SampleComponent,
    HomeComponent,
    PatientComponent,
    SchedulingComponent,
    LoginComponent,
    AdminTemplateComponent,
    UserComponent
  ],
  exports: [
    SampleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CoreModule
  ]
})
export class FeaturesModule { }
