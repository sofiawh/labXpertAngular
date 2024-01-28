import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SampleComponent} from "./sample/sample.component";
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    SampleComponent,
    HomeComponent
  ],
  exports: [
    SampleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
