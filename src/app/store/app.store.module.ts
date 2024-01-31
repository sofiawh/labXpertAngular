import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { sampleReducer } from './sample/reducers/sample.reducers';
import { EffectsModule } from '@ngrx/effects';
import { SampleEffects } from './sample/effects/sample.effects';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ samples: sampleReducer }),
    EffectsModule.forRoot([SampleEffects]),

  ]
})
export class AppStoreModule { }
