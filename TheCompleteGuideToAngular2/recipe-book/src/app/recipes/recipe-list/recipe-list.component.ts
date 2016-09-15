import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe';
import { RecipeItemComponent } from './recipe-item.component';
import { RecipeService } from '../recipe.service';

@Component({
    moduleId: module.id,
    selector: 'rb-recipe-list',
    templateUrl: 'recipe-list.component.html',
    directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
    @Output()
    recipeSelected:EventEmitter<Recipe> = new EventEmitter<Recipe>();
    recipes: Array<Recipe>;

    constructor(private recipeService: RecipeService) {
      this.recipes = [];
    }

    ngOnInit() {
      this.recipes = this.recipeService.getRecipes();
    }

    onSelected(recipe: Recipe){
      this.recipeSelected.emit(recipe);
    }
}
