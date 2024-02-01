import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { sampleReducer } from './sample/reducers/sample.reducers';
import { userReducer } from './user/reducers/user.reducers';
import { EffectsModule } from '@ngrx/effects';
import { SampleEffects } from './sample/effects/sample.effects';
import { UserEffects } from './user/effects/user.effects';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ samples: sampleReducer }),
    EffectsModule.forRoot([SampleEffects]),
    StoreModule.forRoot({ users: userReducer }),
    EffectsModule.forRoot([UserEffects]),
  ]
})
export class AppStoreModule { }
