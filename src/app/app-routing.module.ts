import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import {SampleComponent} from "./features/sample/sample.component";
import {PatientComponent} from "./features/patient/patient.component";
import {SchedulingComponent} from "./features/scheduling/scheduling.component";
import {LoginComponent} from "./features/login/login.component";
import {AdminTemplateComponent} from "./features/admin-template/admin-template.component";
import {AuthenticationGuard} from "./apis/guards/authentication.guard";
import {UserComponent} from "./features/user/user.component";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";

/*
  To @Sofia and @Mariam here where we define the routes of our application
  the path is the url that will be displayed in the browser
  the component is the component that will be loaded when the path is called
  for example when you call localhost:4200/echantillon the SampleComponent will be loaded
  Attention: don't forget to add the routerLink to the sidebar component template
 */
const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent//,
   // data: { title: 'Login Page' }
  },
  {
    path: '', redirectTo : '/login', pathMatch :"full"
  },
  {
    path: 'admin', component: AdminTemplateComponent, canActivate :[AuthenticationGuard],children : [
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Accueil Page' }
      },
      {
        path: 'echantillon',
        component: SampleComponent,
        data: { title: 'Echantillon Page' }
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
      {
        path: 'plannification',
        component: SchedulingComponent,
        data: { title: 'Plannification Page' }
      },
      {
        path: 'utilisateur',
        component: UserComponent, canActivate : [AuthenticationGuard],
        data: { role:"ADMIN" }
      },
      {
        path: 'notAuthorized',
        component: NotAuthorizedComponent
      },
    ]
  },

  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
