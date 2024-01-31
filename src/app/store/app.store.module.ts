import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {sampleReducer} from "./sample/reducers/sample.reducers";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true }),
    StoreModule.forRoot({
      samples: sampleReducer
    })]
})
export class AppStoreModule { }
