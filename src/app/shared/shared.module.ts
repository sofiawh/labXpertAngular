import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpinnerComponent} from "./components/spinner/spinner.component";
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { NotificationComponent } from './components/notification/notification.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    CapitalizePipe,
    NotificationComponent,
  ],
  exports: [
    SpinnerComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
