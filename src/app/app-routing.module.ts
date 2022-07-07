import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const authRoute = {
  path: 'auth',
  outlet: 'dialog',
  loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
};

const homeRoute = {
  path: '',
  component: HomeComponent,
};

const routes: Routes = [
  homeRoute,
  authRoute,
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
