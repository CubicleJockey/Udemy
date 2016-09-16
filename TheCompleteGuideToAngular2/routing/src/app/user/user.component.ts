import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'dre-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnDestroy{
    private id: string;
    private paramsSubscription: Subscription;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        /*
            SnapShot
            ---------
            Angular does not reload components if it doesn't need to. So the constructor
            is not called again and you never update the id.
        */
        //this.id = this.activatedRoute.snapshot.params['id'];

        //Listen to the observable
        //Creating a subscribe listen will cause a memory link if only
        //done in the constructor
        this.paramsSubscription = activatedRoute.params.subscribe(
            (params: any) => {this.id = params['id']}
        );
    }

    public goHome(){
      this.router.navigate(['/']);
    }

    public ngOnDestroy(){
        this.paramsSubscription.unsubscribe();
    }
}
