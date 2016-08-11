import { Component } from '@angular/core';
import { PropertyBindingComponent } from "./property-binding.component";

@Component({
  moduleId: module.id,
  selector: 'app-databinding',
  templateUrl: 'databinding.component.html',
  styleUrls: ['databinding.component.css'],
  directives: [PropertyBindingComponent]
})
export class DatabindingComponent{
  stringInterpolation: string = 'This is a string interpolation.';
  numberInterpolation: number = 2;

  onTest(){
    return true;
  }
}
