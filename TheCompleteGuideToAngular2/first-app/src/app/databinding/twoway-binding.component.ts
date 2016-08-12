import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-twoway-binding',
  templateUrl: 'twoway-binding.component.html',
  styleUrls: ['twoway-binding.component.css']
})
export class TwowayBindingComponent {
  person = {
    name: 'André',
    age: 33
  }
}
