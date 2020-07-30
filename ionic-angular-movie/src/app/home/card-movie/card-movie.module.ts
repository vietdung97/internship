import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardMoviePageRoutingModule } from './card-movie-routing.module';

import { CardMoviePage } from './card-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardMoviePageRoutingModule
  ],
  declarations: [CardMoviePage]
})
export class CardMoviePageModule {}
