import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  private recipes: Array<Recipe>;

  constructor() {
    this.recipes = [
      new Recipe('Vegan Schnitzel', 'Amazing', 'http://www.frysvegetarian.co.uk/wp-content/uploads/2012/06/schnitzel-3.jpg', []),
      new Recipe('Summer Salad', 'Pretty Damn Good', 'http://vegangela.com/wp-content/uploads/2014/02/thumb_southwestern-quinoa-salad.jpg', [])
    ];
  }

  public getRecipes(): Array<Recipe>{
    return this.recipes;
  }
}
