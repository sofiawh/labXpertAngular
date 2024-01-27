import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { SampleComponent } from './features/sample/sample.component';
import { SampleFormComponent } from './features/sample/sample-form/sample-form.component';
import { SampleTableComponent } from './features/sample/sample-table/sample-table.component';
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    SampleComponent,
    SampleFormComponent,
    SampleTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
