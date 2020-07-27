import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailComponent } from './components/home/movie-detail/movie-detail.component';
import { AuthGuard } from './guard/auth.guard';
import { SignupComponent } from './components/signup/signup.component';
import { animation } from '@angular/animations';
import { ManageComponent } from './components/manage/manage.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'movie/:id', component: MovieDetailComponent, canActivate: [AuthGuard], data: {animation: 'ListMoviePage'} },
  {
    path: 'manage',
    component: ManageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'common',
    loadChildren: () =>
      import('./components/common-layout.module').then((m) => m.CommonLayoutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
