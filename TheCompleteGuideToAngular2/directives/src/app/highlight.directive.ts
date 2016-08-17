import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class Highlight {
  @HostListener('mouseenter') mouseover(){
    this.backgroundColor = 'green';
  };

  @HostListener('mouseleave') mouseexit(){
    this.backgroundColor = 'white';
  };

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  };

  private backgroundColor = 'white';
  constructor() {

  }
}
