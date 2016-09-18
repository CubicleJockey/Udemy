import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserEditComponent } from './user-edit.component';

export interface IComponentCanDeactivate{
    canDeactivate: (() => Observable<boolean> | boolean);
}

export class UserEditGuard implements CanDeactivate<IComponentCanDeactivate>{
    public canDeactivate(component: IComponentCanDeactivate): Observable<boolean> | boolean{
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}