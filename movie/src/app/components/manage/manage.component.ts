import { Component, OnInit, TemplateRef } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { of, Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MovieService } from 'src/app/services/movie.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {


  constructor(
    private afs: AngularFirestore,
    private modalService: BsModalService,
    private movieService: MovieService,
    private notification: NzNotificationService,
    private router: Router
  ) { }
  movies$: Movie[];
  valueForm;
  pageCurrent: number = 0;
  modalRef: BsModalRef;

  ngOnInit(): void {
    this.loadListMovie();
  }

  addMovie(movie: Movie) {
    console.log(movie);
    const movieRef: AngularFirestoreDocument<any> = this.afs.doc(`lists/${movie?.title}`);
    movieRef.set(movie, { merge: true });
    this.notification
      .blank(
        'Done !',
        `You have added: ${movie.title.toUpperCase()}`
      )
  }

  loadListMovie() {
    let movieCollection: AngularFirestoreCollection<any> = this.afs.collection('lists');
    return of(movieCollection.valueChanges().subscribe(res => {
      this.movies$ = [...res];
    }));
  }

  deleteMovie(movie) {
    console.log(movie.title);
    const movieRef: AngularFirestoreDocument<any> = this.afs.doc(`lists/${movie?.title}`);
    movieRef.delete();
    this.notification
      .blank(
        'Done !',
        `You have deleted: ${movie.title.toUpperCase()}`
      )
  }

  getValue(form): void {
    this.valueForm = form.value;
    setTimeout(() => {
      this.addMovie(this.valueForm);
    }, 500);

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      {
        backdrop: 'static',
        class: 'modal-xl',
        keyboard: true
      });
  }

  getPageIndex(event) {
    if (event === 1) {
      this.pageCurrent = 0;
    }
    else {
      this.pageCurrent = (event - 1) * 10;
    }
  }
  navigate(data) {
    this.router.navigate(['movie',data.title]);
  }
}
