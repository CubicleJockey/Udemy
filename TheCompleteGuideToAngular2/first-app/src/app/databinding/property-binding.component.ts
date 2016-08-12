import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-property-binding',
  template: `
   {{result}}
  `,
  styles: [],
  inputs: ['result']
})
export class PropertyBindingComponent {
  result: number = 0;
}
