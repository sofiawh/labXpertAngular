import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SampleComponent} from "./sample/sample.component";
import { HomeComponent } from './home/home.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SampleComponent,
    HomeComponent
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
