import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGenreMovieComponent } from './list-genre-movie.component';

describe('ListGenreMovieComponent', () => {
  let component: ListGenreMovieComponent;
  let fixture: ComponentFixture<ListGenreMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGenreMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGenreMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
