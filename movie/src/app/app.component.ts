import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movie';
  isLoggedIn$: Observable<boolean>;
  constructor(private authService: AuthService){}
  ngOnInit(): void{
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }
  onLogout(): void{
    this.authService.logout();
  }
}
