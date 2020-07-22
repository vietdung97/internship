import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective {
  constructor() { }
  @HostListener('click', ['$event']) onClick(event) {
    const list = document.getElementById('list-search');
    list.style.display = 'block';
  }
}
