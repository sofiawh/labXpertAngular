import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {FeaturesModule} from "./features/features.module";
import {AppStoreModule} from "./store/app.store.module";
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {SampleEffects} from "./store/sample/effects/sample.effects";
import {PatientEffects} from "./store/patient/effects/patient.effects";
import { UserEffects } from './store/user/effects/user.effects';
import { ReagentEffects} from './store/reagent/effects/reagent.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FeaturesModule,
    SharedModule,
    AppStoreModule,
    HttpClientModule,
    EffectsModule.forRoot([SampleEffects, PatientEffects, UserEffects, ReagentEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
