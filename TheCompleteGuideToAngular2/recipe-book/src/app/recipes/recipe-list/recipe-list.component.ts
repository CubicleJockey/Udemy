import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
    moduleId: module.id,
    selector: 'rb-recipe-list',
    templateUrl: 'recipe-list.component.html',
    directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [];

    //Temp test data
    dummyRecipe = new Recipe('Dummy', 'Dummy', 'https://pbs.twimg.com/profile_images/1620149654/avatar.jpg');

    constructor() { }

    ngOnInit() {
    }
}
