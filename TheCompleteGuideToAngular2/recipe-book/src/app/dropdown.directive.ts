import { Directive, HostBinding, HostListener}  from '@angular/core';

@Directive({
  selector: '[dreDropdown]'
})
export class DropdownDirective {
  private isOpen: boolean;

  constructor(){
    this.isOpen = false;
  }

  /*applying the bootstrap class to the binded host element*/
  @HostBinding('class.open')
  public get opened(){
    return this.isOpen;
  }

  /*Adding a listener to the click event, can be any*/
  @HostListener('click')
  public open(){
    this.isOpen = true;
  }

  @HostListener('mouseleave')
  public close(){
    this.isOpen = false;
  }
}
