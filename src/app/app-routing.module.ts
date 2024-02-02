import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import {SampleComponent} from "./features/sample/sample.component";
import { UserComponent } from './features/user/user.component';
import { ReagentComponent } from './features/reagent/reagent.component';
import {PatientComponent} from "./features/patient/patient.component";
import {SchedulingComponent} from "./features/scheduling/scheduling.component";
/*
  To @Sofia and @Mariam here where we define the routes of our application
  the path is the url that will be displayed in the browser
  the component is the component that will be loaded when the path is called
  for example when you call localhost:4200/echantillon the SampleComponent will be loaded
  Attention: don't forget to add the routerLink to the sidebar component template
 */
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Accueil Page' }
  },
  {
    path: 'echantillon',
    component: SampleComponent,
    data: { title: 'Echantillon Page' }
  },
  {
    path: 'utilisateur',
    component: UserComponent,
    data: { title: 'Utilisateur Page' }
  },
  {
    path: 'reagent',
    component: ReagentComponent,
    data: { title: 'Réactifs Page' }
  },
  {
    path: 'patient',
    component: PatientComponent,
    data: { title: 'Patient Page' }
  },
  {
    path: 'plannification',
    component: SchedulingComponent,
    data: { title: 'Plannification Page' }
  },
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
