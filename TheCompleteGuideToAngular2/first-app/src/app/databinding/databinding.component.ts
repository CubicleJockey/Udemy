import { Component } from '@angular/core';
import { PropertyBindingComponent } from './property-binding.component';
import { EventBindingComponent } from './event-binding.component';
import { TwowayBindingComponent } from './twoway-binding.component';

@Component({
  moduleId: module.id,
  selector: 'app-databinding',
  templateUrl: 'databinding.component.html',
  styleUrls: ['databinding.component.css'],
  directives: [PropertyBindingComponent, EventBindingComponent, TwowayBindingComponent]
})
export class DatabindingComponent{
  stringInterpolation: string = 'This is a string interpolation.';
  numberInterpolation: number = 2;

  onTest(){
    return true;
  }

  onClicked(value: string){
    alert(value);
  }
}
