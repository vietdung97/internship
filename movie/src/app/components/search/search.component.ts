import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, switchMap} from 'rxjs/operators';
import { MovieService } from 'src/app/services/movie.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild('result') result: ElementRef;
  @ViewChild('searchLayout') searchLayout: ElementRef;
  keyword: string;
  data = [];
  searchedMovie$ = new BehaviorSubject<string>('');
  constructor(private movieService: MovieService, private authService: AuthService) {
    document.addEventListener('click', this.offClickHandler.bind(this));
  }
  ngOnInit(): void {
    this.searchedMovie$.pipe(
      debounceTime(500),
      switchMap((query) => {
        this.keyword = query;
        return this.movieService.findMovieByName(query);
      })
    )
    .subscribe(res => this.data = res);
  }
  ngAfterViewInit(): void {
  }

  search(value) {
    this.searchedMovie$.next(value);
  }

  offClickHandler(event: any) {
    if (!this.searchLayout.nativeElement.contains(event.target)) { // check click origin
        this.result.nativeElement.style.display = 'none';
    }
}
}
