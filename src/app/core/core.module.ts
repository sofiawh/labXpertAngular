import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {LayoutComponent} from './components/layout/layout.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {SampleComponent} from "../features/sample/sample.component";
import {MainComponent} from './components/main/main.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    LayoutComponent,
    MainComponent,
  ],
  exports: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
  ]
})
export class CoreModule {
}
