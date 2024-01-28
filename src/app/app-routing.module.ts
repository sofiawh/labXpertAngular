import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SampleComponent} from "./features/sample/sample.component";

/*
  To @Sofia and @Mariam here where we define the routes of our application
  the path is the url that will be displayed in the browser
  the component is the component that will be loaded when the path is called
  for example when you call localhost:4200/echantillon the SampleComponent will be loaded
  Attention: don't forget to add the routerLink to the sidebar component template
 */
const routes: Routes = [
  {
    path: 'echantillon',
    component: SampleComponent,
    data: {title: 'Echantillon'}
  },
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
