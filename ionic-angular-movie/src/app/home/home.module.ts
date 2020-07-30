import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CardMoviePage } from './card-movie/card-movie.page';
import { MovieDetailPage } from './movie-detail/movie-detail.page';
import { AuthGuard } from '../guards/auth.guard';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CardMoviePage, MovieDetailPage],
  providers: [AuthGuard]
})
export class HomePageModule {}
