import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IComponentCanDeactivate } from './user-edit-guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'dre-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements IComponentCanDeactivate{
    private done: boolean;

    constructor(private router: Router) {
        this.done = false;
    }

    public goHome(){
        this.router.navigate(['']);
    }

    public canDeactivate(): Observable<boolean> | boolean{
        if(!this.done){
            return confirm('Do you want to leave?');
        }
        return true;
    }
}
