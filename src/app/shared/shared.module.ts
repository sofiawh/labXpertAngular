import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpinnerComponent} from "./components/spinner/spinner.component";
import { CapitalizePipe } from './pipes/capitalize.pipe';



@NgModule({
  declarations: [
    SpinnerComponent,
    CapitalizePipe,
  ],
  exports: [
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
