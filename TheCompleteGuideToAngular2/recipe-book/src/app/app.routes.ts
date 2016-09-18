import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RecipesComponent } from './recipe/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeRoutes } from './recipe/recipes.routes';

export const AppRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: RecipeRoutes },
    { path: 'shopping-list', component: ShoppingListComponent },
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
