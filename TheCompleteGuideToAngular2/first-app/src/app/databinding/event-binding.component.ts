import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-event-binding',
  templateUrl: 'event-binding.component.html',
  styleUrls: ['event-binding.component.css']
})
export class EventBindingComponent {
  @Output('dreClicked') myClicked = new EventEmitter<string>();

  onClicked(){
    this.myClicked.emit('It Worked!');
  }
}

