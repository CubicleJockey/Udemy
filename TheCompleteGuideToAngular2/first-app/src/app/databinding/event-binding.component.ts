import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-event-binding',
  templateUrl: 'event-binding.component.html',
  styleUrls: ['event-binding.component.css']
})
export class EventBindingComponent {
  onClicked(){
    alert('It worked!');
  }
}
