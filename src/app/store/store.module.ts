import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {sampleReducers} from "./sample/reducers/sample.reducers";
import {patientReducers} from "./patient/reducers/patient.reducers";

// @ts-ignore
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({patient : sampleReducers}),
    StoreModule.forRoot({patient : patientReducers})
  ]
})
export class AppStoreModule { }
