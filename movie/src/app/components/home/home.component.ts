import { Component, OnInit } from '@angular/core';
import {MOVIES} from '../../models/movie.model'
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies = MOVIES;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
  }
}
