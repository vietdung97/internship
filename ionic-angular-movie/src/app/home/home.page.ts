import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../models/movie.model';
import { AuthService } from '../sevices/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  movies = MOVIES;
  currentUser;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    console.log('HomePage')
  }
}
