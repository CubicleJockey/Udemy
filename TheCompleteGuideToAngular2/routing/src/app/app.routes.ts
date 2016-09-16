import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserComponent } from './user/user.component';
import { UserRoutes } from './user/user.routes';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user/:id', component: UserComponent },
    { path: 'user/:id', component: UserComponent, children: UserRoutes }
];

export const RoutingModule: ModuleWithProviders  = RouterModule.forRoot(appRoutes);