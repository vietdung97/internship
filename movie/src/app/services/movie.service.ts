import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { MOVIES, GENRES, Movie } from '../models/movie.model';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private afs: AngularFirestore) { }

  getMovieByID(id) {
    const movies = MOVIES;
    const result = movies.filter(movieID => movieID.Title === id);
    return of(result);
  }
  getMovieByGenre(genre): Observable<any> {
    const movies = MOVIES;
    const result = movies.filter(res => res.Genre.search(genre) !== -1);
    return of(result);
  }
  findMovieByName(keyword): Observable<any> {
    const movies = MOVIES;
    const result = movies.filter(res => res.Title.toLowerCase().search(keyword.trim().toLowerCase()) !== -1);
    return of(result);
  }
}
