import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserComponent } from './user/user.component';
import { UserRoutes } from './user/user.routes';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';

/*In this version of Angular 2 Routing I needed a path for user and user/ for the redirect to catch all cases.*/
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user', redirectTo: 'user/1', pathMatch: 'full' },
    { path: 'user/', redirectTo: 'user/1', pathMatch: 'full' },
    { path: 'user/:id', component: UserComponent },
    { path: 'user/:id', component: UserComponent, children: UserRoutes },
    { path: 'invalidUrl', component: InvalidUrlComponent },
    { path: '**', redirectTo: 'invalidUrl', pathMatch: 'full' }
];

export const RoutingModule: ModuleWithProviders  = RouterModule.forRoot(appRoutes);