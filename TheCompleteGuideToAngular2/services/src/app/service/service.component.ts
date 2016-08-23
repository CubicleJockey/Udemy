import { Component } from '@angular/core';
import { DataService } from './data.service';
import { CmpAComponent } from './cmp-a.component';
import { CmpBComponent } from './cmp-b.component';
import { PatientDetailsComponent } from './patient-details.component';

@Component({
    moduleId: module.id,
    selector: 'si-service',
    /*template: `
    <si-cmp-a></si-cmp-a>
    <si-cmp-b></si-cmp-b>
  `,*/
    template: `
      <app-patient-details></app-patient-details>
     `,
  directives: [CmpAComponent, CmpBComponent, PatientDetailsComponent],
  providers: [DataService]
})
export class ServiceComponent {
}
