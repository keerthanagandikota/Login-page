import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
    // component: HomeComponent
    // , canActivate: a
  },
  {
    path: 'home',
    component: HomeComponent
    // , canActivate: a
  },
  {
    path: 'login',
    component: LoginComponent
    // , canActivate: a
  },
  {
    path: '**',
    redirectTo: ''
    // , canActivate: a
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
