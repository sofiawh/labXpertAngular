import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { NotificationComponent } from './components/notification/notification.component';



@NgModule({
  declarations: [
    CapitalizePipe,
    NotificationComponent,
  ],
  exports: [
    NotificationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
