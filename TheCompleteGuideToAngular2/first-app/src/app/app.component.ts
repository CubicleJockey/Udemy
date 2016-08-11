import {Component} from '@angular/core';
import {OtherComponent, AnotherComponent} from './other';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [OtherComponent, AnotherComponent] //<----- After import
})
export class AppComponent {

}
