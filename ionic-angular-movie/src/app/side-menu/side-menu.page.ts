import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../sevices/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
})
export class SideMenuPage implements OnInit {

  isLoggedIn$: boolean = false;
  authSubs: Subscription;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    console.log('SIDE MENU COMP')
    this.authSubs = this.authService.isLoggedIn.subscribe(val => this.isLoggedIn$ = val);
  }
  onLogout(): void{
    this.authService.logOut();
  }
}
