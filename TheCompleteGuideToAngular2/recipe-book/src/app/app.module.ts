import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './dropdown.directive';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item.component';
import { RecipeService } from './recipe/recipe.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    HeaderComponent,
    DropdownDirective,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingListAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
