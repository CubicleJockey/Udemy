import { Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details.component';
import { UserEditComponent } from './user-edit.component';

/*Child rights*/
export const UserRoutes: Routes = [
    { path: 'details', component: UserDetailsComponent },
    { path: 'edit', component: UserEditComponent }
];
