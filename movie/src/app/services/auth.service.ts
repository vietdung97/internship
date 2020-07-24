import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private checkLogin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  user$: Observable<User>;
  get isLoggedIn() {
    return this.checkLogin.asObservable();
  }

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) {
    this.user$ = this.afAuth.authState
      .pipe(
        switchMap(user => {
          if (user) {
            console.log(user);
            // if(user.emailVerified) {
              this.loggedIn();
              return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
            // }
            }
          else return of(null);
        })
      );

  }
  GoogleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }
  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.loggedIn();
        this.afs.collection('users', ref => ref.where('uid', '==', credential.user.uid)).snapshotChanges().subscribe(
          res => {
            if (!res.length) {
              this.setUserData(credential.user);
            }
          }
        );
      });
  }
  private setUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || user.email.split('@')[0],
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, { merge: true }).catch(
      (error) => alert(error)
    );
  }

  signIn(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((credential)=> {
      this.loggedIn();
      this.afs.collection('users', ref => ref.where("uid","==",credential.user.uid)).snapshotChanges().subscribe(res => {
        if(!res.length) {
          this.setUserData(credential.user);
        }
      });
    }).catch((error) => alert(error))
  }

  signUp(email: string, password: string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((credential) => {
      this.sendVerificationEmail();
      this.afs.collection('users', ref => ref.where("uid","==",credential.user.uid)).snapshotChanges().subscribe(res => {
        if(!res.length) {
          this.setUserData(credential.user);
        }
      });
    })
    .catch((error) => alert(error))

  }
  sendVerificationEmail(){
    console.log('sending mail');
    return this.afAuth.auth.currentUser.sendEmailVerification();
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.checkLogin.next(false);
      this.router.navigate(['/login']);
    });
  }
  loggedIn() {
    this.checkLogin.next(true);
    this.router.navigate(['/']);
  }
}
