import {Component} from '@angular/core';

@Component({
    selector: 'dre-shopping-list-add',
    templateUrl: './shopping-list-add.component.html',
    styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent {
    public items: Array<any>;

    constructor() {
        this.items = [];
    }
}
