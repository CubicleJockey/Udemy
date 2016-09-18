import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredients';

@Injectable()
export class ShoppingListService {
  private ingredients: Array<Ingredient>;

  constructor() {
    this.ingredients = [];
  }

  public getIngredients(): Array<Ingredient> {
    return this.ingredients;
  }

  public addIngredients(ingredients: Array<Ingredient>){
    /*Apply array push to each ingredient in ingredients to the private ingredients array*/
    Array.prototype.push.apply(this.ingredients, ingredients);
  }
}
