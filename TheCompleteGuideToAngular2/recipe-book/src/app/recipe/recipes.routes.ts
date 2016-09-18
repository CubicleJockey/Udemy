import { Routes } from '@angular/router';
import { RecipesStartComponent } from './recipes-start.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeNewComponent } from './recipe-new/recipe-new.component';

export const RecipeRoutes: Routes = [
    { path: '', component: RecipesStartComponent },
    { path: 'new', component: RecipeNewComponent },
    { path: ':id', component: RecipeDetailsComponent },
    { path: ':id/edit', component: RecipeEditComponent }
];