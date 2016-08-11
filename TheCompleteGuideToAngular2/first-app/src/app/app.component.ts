import {Component} from '@angular/core';
import { DatabindingComponent } from './databinding';
//import {OtherComponent, AnotherComponent} from './other';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [DatabindingComponent]
/*  styleUrls: ['app.component.css'],
  directives: [OtherComponent, AnotherComponent] //<----- After import*/
})
export class AppComponent {

}
