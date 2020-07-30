import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardMoviePage } from './card-movie.page';

const routes: Routes = [
  {
    path: '',
    component: CardMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardMoviePageRoutingModule {}
