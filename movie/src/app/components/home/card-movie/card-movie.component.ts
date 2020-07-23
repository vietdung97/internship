import { Component, OnInit, Input, Directive, HostListener } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css'],
  animations: [
    trigger('hoverCardMovie', [
      state('over', style({
        transform: 'scale(1.2)',
      })),
      // transition('* => over', animate('500ms ease')),
      transition('* <=> *', animate('800ms ease')),
    ])
  ]
})
export class CardMovieComponent implements OnInit {
  @Directive({
    selector: '[appCard]'
  })
  @Input() movie;
  isScale = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('mouseover') onMouseOver() {
    this.isScale = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.isScale = false;
  }
  get stateCard() {
    return this.isScale ? 'over' : 'leave';
  }

}
