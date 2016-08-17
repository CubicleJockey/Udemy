import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class Highlight {
  /*private elementRef: ElementRef; <-- commented out because the shortcut is putting private
    inside the constructor
  */

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    //Can do this but not advised.
    //this.elementRef.nativeElement.style.backgroundColor = 'green';

    //clean way and also works in environments that are not browsers.
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }
}
