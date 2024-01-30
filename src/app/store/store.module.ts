import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {sampleReducers} from "./sample/reducers/sample.reducers";


// @ts-ignore
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({patient : sampleReducers})
  ]
})
export class AppStoreModule { }
