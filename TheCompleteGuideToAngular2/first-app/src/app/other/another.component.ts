import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'fa-another',
  template: `
    <article>
		Test
	</article>
  `,
  styles: [`
	article {
		border: 1px solid black;
	}
  `]
})
export class AnotherComponent {

}