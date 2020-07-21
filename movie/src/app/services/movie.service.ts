import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MOVIES } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  constructor() { }
  getMovieByID(id){
    let movies = MOVIES;
    const result = movies.filter(movieID => movieID.Title == id);
    return of(result);
  }
}
