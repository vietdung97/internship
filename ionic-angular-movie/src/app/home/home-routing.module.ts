import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { MovieDetailPage } from './movie-detail/movie-detail.page';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: ':movie',
    component: MovieDetailPage,
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'movie-detail',
  //   loadChildren: () => import('./movie-detail/movie-detail.module').then( m => m.MovieDetailPageModule)
  // },
  // {
  //   path: 'card-movie',
  //   loadChildren: () => import('./card-movie/card-movie.module').then( m => m.CardMoviePageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
