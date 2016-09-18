import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../models/ingredients';

@Component({
  selector: 'dre-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
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
