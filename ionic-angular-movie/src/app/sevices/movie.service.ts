import { Injectable } from '@angular/core';
import { MOVIES } from '../models/movie.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  getMovieByID(id) {
    const movies = MOVIES;
    const result = movies.filter(movieID => movieID.title === id);
    return of(result);
  }
}
