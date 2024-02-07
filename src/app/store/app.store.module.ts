import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { sampleReducer } from './sample/reducers/sample.reducers';
import { EffectsModule } from '@ngrx/effects';
import { SampleEffects } from './sample/effects/sample.effects';
import { PatientEffects } from './patient/effects/patient.effects';
import {patientReducer} from "./patient/reducers/patient.reducers";
import {SchedulingEffects} from "./scheduling/effects/scheduling.effects";
import {schedulingReducer} from "./scheduling/reducers/scheduling.reducers";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ samples: sampleReducer ,patients: patientReducer, schedulings: schedulingReducer}),
    EffectsModule.forRoot([SampleEffects, PatientEffects, SchedulingEffects]),

  ]
})
export class AppStoreModule { }
