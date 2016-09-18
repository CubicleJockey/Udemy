import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';
import { Recipe } from '../../models/recipe';
import { RecipesService } from '../recipes.service';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
    selector: 'dre-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output()
    public recipeSelected: EventEmitter<Recipe>;
    public recipes: Array<Recipe>;

    constructor(private recipeService: RecipesService) {
        this.recipeSelected = new EventEmitter<Recipe>();
        this.recipes = [];
    }

    public ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
    }

    public onSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }
}
