import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'dre-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent{
    @Input()
    public recipe: Recipe;
}
