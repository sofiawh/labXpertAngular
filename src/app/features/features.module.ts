import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SampleComponent} from "./sample/sample.component";



@NgModule({
  declarations: [
    SampleComponent
  ],
  exports: [
    SampleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
