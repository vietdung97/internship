import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.page.html',
  styleUrls: ['./card-movie.page.scss'],
})
export class CardMoviePage implements OnInit {

  @Input() movie: Movie;
  constructor() { }

  ngOnInit() {
  }

}
