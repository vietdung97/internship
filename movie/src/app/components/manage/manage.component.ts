import { Component, OnInit, TemplateRef } from '@angular/core';
import { AngularFirestoreDocument,AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { of, Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(
    private afs: AngularFirestore,
    private modalService: BsModalService
    ) { }
  movies$: Movie[];
  // isVisible = false;
  // isOkLoading = false;
  valueForm;
  modalRef: BsModalRef;

  ngOnInit(): void {
    this.loadListMovie();
  }

  addMovie(movie: Movie) {
    console.log(movie);
    const movieRef: AngularFirestoreDocument<any> = this.afs.doc(`lists/${movie?.title}`);
    movieRef.set(movie , { merge: true });
  }

  loadListMovie(): Observable<any> {
    let movieCollection : AngularFirestoreCollection<any> = this.afs.collection('lists');
    return of(movieCollection.valueChanges().subscribe(res => {
      this.movies$ = [...res];
    }));
  }

  deleteMovie(movie){
    console.log(movie.title);
    const movieRef: AngularFirestoreDocument<any> = this.afs.doc(`lists/${movie?.title}`);
    movieRef.delete();
  }

  // showModal(): void {
  //   this.isVisible = true;
  // }

  // handleOk(): void {
  //   this.isOkLoading = true;
  //   setTimeout(() => {
  //     this.isVisible = false;
  //     this.isOkLoading = false;
  //     this.addMovie(this.valueForm);
  //   }, 500);
  // }

  // handleCancel(): void {
  //   this.isVisible = false;
  // }
  getValue(form): void {
    this.valueForm = form.value;
    setTimeout(() =>{
      this.addMovie(this.valueForm);
    }, 500);

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      {
        backdrop:'static',
        class:'modal-xl',
        keyboard: true
      });
  }
}
