import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../shared/recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  public selectedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
  }

  public onAddToShoppingList(){
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }
}
