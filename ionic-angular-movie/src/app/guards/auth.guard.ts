import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../sevices/auth.service';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let authenticated = false;
    this.authService.isLoggedIn.subscribe(val => authenticated = val);
    console.log(authenticated);
    if(!authenticated) {
      this.router.navigate(['menu','login']);
      return false;
    }
    else {
      return true;
    }
    // return this.authService.isLoggedIn.pipe(
    //   map((login: boolean) => {
    //     console.log('canactive:', login);
    //     if (!login) {
    //       this.router.navigate(['menu','login']);
    //       return false;
    //     }
    //     else {
    //       return true;
    //     }

    //   })
    // );
  }
  
}
