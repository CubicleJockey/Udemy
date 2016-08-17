import { Directive, HostListener, HostBinding, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class Highlight {
  @HostListener('mouseenter') mouseover(){
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
    //this.backgroundColor = 'green';
  };

  @HostListener('mouseleave') mouseexit(){
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'white');
    //this.backgroundColor = 'white';
  };

/*  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  };*/

  private backgroundColor = 'white';
  constructor(private elementRef: ElementRef, private renderer: Renderer) {  }
}
