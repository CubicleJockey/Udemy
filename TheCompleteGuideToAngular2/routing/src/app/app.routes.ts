import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user', component: UserComponent }
];

export const RoutingModule: ModuleWithProviders  = RouterModule.forRoot(appRoutes);