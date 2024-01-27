import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/';
// import { LayoutComponent } from './layout.component';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    LayoutComponent,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
