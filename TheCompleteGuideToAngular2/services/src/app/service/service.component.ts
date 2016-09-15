import { Component } from '@angular/core';
import { DataService } from './data.service';
import { CmpAComponent } from './cmp-a.component';
import { CmpBComponent } from './cmp-b.component';

@Component({
    moduleId: module.id,
    selector: 'si-service',
    /*template: `
    <si-cmp-a></si-cmp-a>
    <si-cmp-b></si-cmp-b>
  `,*/
    templateUrl: 'service.component.html',
  directives: [CmpAComponent, CmpBComponent],
  providers: [DataService]
})
export class ServiceComponent {
}
