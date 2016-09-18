import {Component, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dre-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy{
  private paramsSubscription: Subscription;
  private queryParam: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.paramsSubscription = this.activatedRoute.queryParams.subscribe(
        (queryParams: any) => {
          this.queryParam = queryParams['analytics'];
        }
    );
  }

  public ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }
}