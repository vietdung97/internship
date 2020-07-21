import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  movie$;
  id: number;
  private sub: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
    ) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.movieService.getMovieByID(this.id).subscribe(res => {
        this.movie$ = res[0];
      })
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
