import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,

  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
