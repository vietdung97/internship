import { Component, OnInit } from '@angular/core';
import { GENRES } from '../../models/movie.model';

@Component({
  selector: 'app-list-genre',
  templateUrl: './list-genre.component.html',
  styleUrls: ['./list-genre.component.css']
})
export class ListGenreComponent implements OnInit {
  genres = GENRES;
  constructor() { }

  ngOnInit(): void {
  }

}
