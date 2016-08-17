import { Directive, HostListener, HostBinding, Renderer, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class Highlight {
  @HostListener('mouseenter') mouseover(){
    //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', this.highlightColor);
    this.backgroundColor = this.highlightColor;
  };

  @HostListener('mouseleave') mouseleave(){
    //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', this.defaultColor);
    this.backgroundColor = this.defaultColor;
  };

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  };

  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'green'; //shares same name with directive as a shortcut to do this [highlight]=""
  private backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer) {  }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
}
