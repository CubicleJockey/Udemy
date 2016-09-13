import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

/*
  Creating the opposite of ngIf
 */
@Directive({
  selector: '[unless]'
})
export class UnlessDirective {

  @Input()
  public set unless(condition: boolean){
    if(!condition){
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else{
      //do not display
      this.viewContainer.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    /*
       1. templateRef is Angulars <template></template> references
       2. viewContainer is the view in which the unless directive is being referenced
    */
  }
}
