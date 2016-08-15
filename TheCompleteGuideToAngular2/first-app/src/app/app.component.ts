import {Component} from '@angular/core';
import { DatabindingComponent } from './databinding';
import { LifecycleComponent } from './lifecycle';
//import {OtherComponent, AnotherComponent} from './other';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [DatabindingComponent, LifecycleComponent]
/*  styleUrls: ['app.component.css'],
  directives: [OtherComponent, AnotherComponent] //<----- After import*/
})
export class AppComponent {
  delete: boolean = false;
}
