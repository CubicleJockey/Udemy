import { Component } from '@angular/core';
import { OtherComponent} from './other';
//import { OtherComponent} from './other/component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
	<h1>Inline Template</h1>
	<fa-other></fa-other>
  `,
  styles: [`
	h1{
		color: red;
	}
  `],
  directives: [OtherComponent] //<----- After import
})
export class AppComponent {
	
}
