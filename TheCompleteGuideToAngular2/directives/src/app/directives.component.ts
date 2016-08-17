import { Component } from '@angular/core';
import { Highlight } from './highlight.directive';

@Component({
  moduleId: module.id,
  selector: 'directives-app',
  templateUrl: 'directives.component.html',
  styleUrls: ['directives.component.css'],
  directives: [Highlight]
})
export class DirectivesAppComponent {

}
