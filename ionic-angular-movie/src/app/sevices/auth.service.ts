import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private checkLogin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  user$: Observable<User>;

  constructor(
    private router: Router
  ) {
  }

  get isLoggedIn() {
    return this.checkLogin.asObservable();
  }


  loggedIn() {
    this.checkLogin.next(true);
    this.router.navigate(['/']);
  }
  logOut() {
    this.checkLogin.next(false);
    this.router.navigate(['/']);
  }
}