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
import {SchedulingEffects} from "./store/scheduling/effects/scheduling.effects";

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
    EffectsModule.forRoot([SampleEffects, PatientEffects, SchedulingEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
