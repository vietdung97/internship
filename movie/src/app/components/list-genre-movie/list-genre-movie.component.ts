import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-list-genre-movie',
  templateUrl: './list-genre-movie.component.html',
  styleUrls: ['./list-genre-movie.component.css']
})
export class ListGenreMovieComponent implements OnInit {
  movieGenre$: Observable<any>;
  constructor(
    private _route: ActivatedRoute,
    private movieService: MovieService

  ) { }

  ngOnInit(): void {
    this.movieGenre$ = this._route.paramMap.pipe(
      map(params => params.get('genre')),
      switchMap(genre => this.movieService.getMovieByGenre(genre))
    );
  }
}
