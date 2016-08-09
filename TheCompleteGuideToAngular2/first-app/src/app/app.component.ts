import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
	<h1>Inline Template</h1>
	<p>Another line</p>
  `,
  styles: [`
	h1{
		color: red;
	}
  `]
})
export class AppComponent {

}
