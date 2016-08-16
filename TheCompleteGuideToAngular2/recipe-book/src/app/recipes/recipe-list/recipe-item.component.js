"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var RecipeItemComponent = (function () {
    function RecipeItemComponent() {
        this.recipeId = 0;
    }
    RecipeItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], RecipeItemComponent.prototype, "recipe");
    RecipeItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rb-recipe-item',
            templateUrl: 'recipe-item.component.html'
        })
    ], RecipeItemComponent);
    return RecipeItemComponent;
}());
exports.RecipeItemComponent = RecipeItemComponent;
//# sourceMappingURL=recipe-item.component.js.map