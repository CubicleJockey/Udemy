import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dre-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{

  constructor(private router: Router) {

  }

  public goHome(){
      this.router.navigate(['/']);
  }
}
