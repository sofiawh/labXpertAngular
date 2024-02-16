import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {FeaturesModule} from "./features/features.module";
import {AppStoreModule} from "./store/app.store.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {SampleEffects} from "./store/sample/effects/sample.effects";
import {PatientEffects} from "./store/patient/effects/patient.effects";
import {SchedulingEffects} from "./store/scheduling/effects/scheduling.effects";
import {AppHttpInterceptor} from "./apis/interceptors/app-http.interceptor";
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

@NgModule({
  declarations: [
    AppComponent,
    NotAuthorizedComponent,
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
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : AppHttpInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
