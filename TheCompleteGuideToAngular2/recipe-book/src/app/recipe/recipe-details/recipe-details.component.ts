import { Component } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";
import { Recipe } from "../../models/recipe";
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'dre-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent{

  @Input()
  public selectedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {
  }

  public onAddToShoppingList(){
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }
}
