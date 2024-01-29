import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SampleComponent} from "./sample/sample.component";
import { HomeComponent } from './home/home.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { UserComponent } from './user/user.component';
import { ReagentComponent } from './reagent/reagent.component';

@NgModule({
  declarations: [
    SampleComponent,
    HomeComponent,
    UserComponent,
    ReagentComponent
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
