import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { sampleReducer } from './sample/reducers/sample.reducers';
import { userReducer } from './user/reducers/user.reducers';
import { EffectsModule } from '@ngrx/effects';
import { SampleEffects } from './sample/effects/sample.effects';
import { UserEffects } from './user/effects/user.effects';
import { reagentReducer } from './reagent/reducers/reagent.reducers';
import { ReagentEffects } from './reagent/effects/reagent.effects';
import { PatientEffects } from './patient/effects/patient.effects';
import {patientReducer} from "./patient/reducers/patient.reducers";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ samples: sampleReducer ,users: userReducer , reagents: reagentReducer,patients: patientReducer}),
    EffectsModule.forRoot([SampleEffects,UserEffects,ReagentEffects, PatientEffects]),
  ]
})
export class AppStoreModule { }
