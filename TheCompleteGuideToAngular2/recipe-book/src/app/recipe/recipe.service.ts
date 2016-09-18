import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredients';

@Injectable()
export class RecipeService {
  private recipes: Array<Recipe>;

  constructor() {
    this.recipes = [
      new Recipe('Vegan Schnitzel', 'Amazing', 'http://www.frysvegetarian.co.uk/wp-content/uploads/2012/06/schnitzel-3.jpg', [
        new Ingredient('Flour', 1.5),
        new Ingredient('Corn Starch', 1),
        new Ingredient('Salt', 0.5),
        new Ingredient('Garlic Powder', 1),
        new Ingredient('Cayenne Powder', 1),
        new Ingredient('Hot Sauce', 1),
        new Ingredient('Beer/Seltzer Water', 12),
        new Ingredient('Panko', 0.75),
        new Ingredient('Sesame Seeds', 2),
        new Ingredient('Large Portobello  Mushrooms', 4)
      ]),
      new Recipe('Summer Salad', 'Pretty Damn Good', 'http://vegangela.com/wp-content/uploads/2014/02/thumb_southwestern-quinoa-salad.jpg', [
        new Ingredient('Mixed Greens', 15),
        new Ingredient('Spinach', 2),
        new Ingredient('Red Onions', 1),
        new Ingredient('Garlic', 4),
        new Ingredient('Avocado', 2),
        new Ingredient('Tomatoes', 4),
        new Ingredient('Cilantro', 1),
        new Ingredient('Salt and Pepper', 1),
        new Ingredient('Lime Juice', 2),
        new Ingredient('Green Bell Pepper', 1)
      ])
    ];
  }

  public getRecipes(): Array<Recipe>{
    return this.recipes;
  }
}