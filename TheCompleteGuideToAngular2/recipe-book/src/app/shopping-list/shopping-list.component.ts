import { Component, OnInit } from '@angular/core';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient';

@Component({
  moduleId: module.id,
  selector: 'rb-shopping-list',
  templateUrl: 'shopping-list.component.html',
  directives: [ShoppingListAddComponent]
})
export class ShoppingListComponent implements OnInit {
  private ingredients: Array<Ingredient>;

  constructor(private shoppingListService: ShoppingListService) {
    this.ingredients = [];
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  }

}
