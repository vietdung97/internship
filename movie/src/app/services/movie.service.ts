import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { MOVIES, GENRES } from '../models/movie.model';

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
  getMovieByGenre(genre):Observable<any>{
    let movies= MOVIES;
    const result = movies.filter(res => res.Genre.search(genre) != -1);
    return of(result);
  }
}
