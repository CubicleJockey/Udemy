import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipe/recipes.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './dropdown.directive';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item.component';
import { RecipesService } from './recipe/recipes.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RoutingModule } from './app.routes';
import { RecipesStartComponent } from './recipe/recipes-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeNewComponent } from './recipe/recipe-new/recipe-new.component';

@NgModule({
    declarations: [
        AppComponent,
        RecipesComponent,
        RecipeDetailsComponent,
        RecipeListComponent,
        HeaderComponent,
        DropdownDirective,
        RecipeItemComponent,
        ShoppingListComponent,
        ShoppingListAddComponent,
        RecipesStartComponent,
        RecipesStartComponent,
        RecipeEditComponent,
        RecipeNewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RoutingModule
    ],
    providers: [RecipesService, ShoppingListService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
