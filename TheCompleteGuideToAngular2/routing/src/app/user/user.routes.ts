import { Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details.component';
import { UserEditComponent } from './user-edit.component';
import { UserDetailGuard } from './user-detail-guard';
import { UserEditGuard } from './user-edit-guard';

/*Child rights*/
export const UserRoutes: Routes = [
    { path: 'details', component: UserDetailsComponent, canActivate: [UserDetailGuard] },
    { path: 'edit', component: UserEditComponent, canDeactivate: [UserEditGuard]}
];
