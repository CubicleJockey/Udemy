import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  moduleId: module.id,
  selector: 'directives-app',
  templateUrl: 'directives.component.html',
  styleUrls: ['directives.component.css'],
  directives: [HighlightDirective]
})
export class DirectivesAppComponent {
  //*ngIf
  private switch: boolean = true;
  onSwitch(){
    this.switch = !this.switch;
  }

  //*ngFor
  private items = [1, 2, 3, 4, 5];

  //ngSwtich ([ngSwitch]="value")
  private value = 10;
}
