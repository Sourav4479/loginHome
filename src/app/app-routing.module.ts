import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { TryComponent } from './components/dashboard/try/try.component';


const routes: Routes = [
  {path : '', component: LoginComponent},
  {path : 'dashboard', component: DashboardComponent, children:[
    {path: '',component:HomeComponent},
    {path: 'try',component:TryComponent}
  ]}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
