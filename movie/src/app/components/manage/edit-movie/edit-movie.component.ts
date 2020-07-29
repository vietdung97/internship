import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  editMovieForm: FormGroup;
  @Input() dataEditMovie;
  @Output() editMovieFormOut = new EventEmitter<FormGroup>();
  @Output() close = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editMovieForm = this.fb.group({
      title: [{value : this.dataEditMovie.title, disabled: true}, [Validators.required]],
      year: [this.dataEditMovie.year, [Validators.required]],
      rated: [this.dataEditMovie.rated, [Validators.required]],
      released: [this.dataEditMovie.released, [Validators.required]],
      runtime: [this.dataEditMovie.runtime, [Validators.required]],
      genre: [this.dataEditMovie.genre, [Validators.required]],
      director: [this.dataEditMovie.director, [Validators.required]],
      writer: [this.dataEditMovie.writer, [Validators.required]],
      actors: [this.dataEditMovie.actors, [Validators.required]],
      plot: [this.dataEditMovie.plot, [Validators.required]],
      language: [this.dataEditMovie.language, [Validators.required]],
      country: [this.dataEditMovie.country, [Validators.required]],
      awards: [this.dataEditMovie.awards, [Validators.required]],
      poster: [this.dataEditMovie.poster, [Validators.required]],
      metascore: [this.dataEditMovie.metascore, [Validators.required]],
      imdbRating: [this.dataEditMovie.imdbRating, [Validators.required]],
      imdbVotes: [this.dataEditMovie.imdbVotes, [Validators.required]],
      imdbID: [this.dataEditMovie.imdbID, [Validators.required]],
      type: [this.dataEditMovie.type, [Validators.required]],
      response: [this.dataEditMovie.response, [Validators.required]],
      images: [this.dataEditMovie?.images, [Validators.required]],
    });
    console.log(this.editMovieForm);
  }

  onSubmit() {
    this.editMovieForm.value.title = this.dataEditMovie.title; // because title is document key...
    console.log(this.editMovieForm.value);
    this.editMovieFormOut.emit(this.editMovieForm);
    this.close.emit(null);
  }
  onCancel() {
    this.close.emit(null);
  }
}
