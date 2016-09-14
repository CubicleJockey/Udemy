import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
    moduleId: module.id,
    selector: 'rb-recipe-list',
    templateUrl: 'recipe-list.component.html',
    directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
    @Output()
    recipeSelected:EventEmitter<Recipe> = new EventEmitter<Recipe>();

    recipes: Array<Recipe> = [
      new Recipe('Vegan Schnitzel', 'Amazing', 'http://www.frysvegetarian.co.uk/wp-content/uploads/2012/06/schnitzel-3.jpg', []),
      new Recipe('Summer Salad', 'Pretty Damn Good', 'http://vegangela.com/wp-content/uploads/2014/02/thumb_southwestern-quinoa-salad.jpg', [])
    ];

    constructor() { }

    ngOnInit() {
    }

    onSelected(recipe: Recipe){
      this.recipeSelected.emit(recipe);
    }
}
