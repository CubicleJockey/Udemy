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
  private switch: boolean = true;

  onSwitch(){
    this.switch = !this.switch;
  }
}
