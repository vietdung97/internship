import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { trigger, state, style, transition, animate, query, animateChild, group } from '@angular/animations';
import { User } from './models/user.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // trigger('popOverState', [
    //   state('show', style({
    //     opacity: 1
    //   })),
    //   state('hide', style({
    //     opacity: 0
    //   })),
    //   transition('show => hide', animate('600ms ease-out')),
    //   transition('hide => show', animate('600ms ease-in'))
    // ]),
    // trigger('photoState', [
    //   state('move', style({
    //     transform: 'translateX(-100%) translateX(50px)'
    //   })),
    //   state('spin', style({
    //     transform: 'rotateY(180deg) rotateZ(90deg)'
    //   })),
    //   state('scale', style({
    //     transform: 'scale(0.7)'
    //   })),
    //   transition('spin <=> move', [ animate('2000ms ease')]),
    //   transition('* <=> *', animate('500ms ease')),
    // ]),
    // Router animation
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            left: 0,
            width: '100%',
            opacity: 0,
            transform: 'scale(0) translateY(100%)'
          })
        ], { optional: true }),
        query(':enter', [
          animate('600ms ease',
            style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  show = false;
  position: string;
  title = 'movie';
  currentUser;
  authSubs: Subscription;
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.authSubs = this.authService.user$.subscribe(user => {
      this.currentUser = user;
    }
    )
  }
  onLogout(): void {
    this.authService.signOut();
  }
  // get stateName() {
  //   return this.show ? 'show' : 'hide';
  // }
  // toggle(): void {
  //   this.show = !this.show;
  // }
  // changePosition(newPosition: string) {
  //   this.position = newPosition;
  // }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
