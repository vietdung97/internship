import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/sevices/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {
  movie$;
  id: number;
  private sub: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['movie'];
      this.movieService.getMovieByID(this.id).subscribe(res => {
        this.movie$ = res[0];
      })
    })
  }

}
