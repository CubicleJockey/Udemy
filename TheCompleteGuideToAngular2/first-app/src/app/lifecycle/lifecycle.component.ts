import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-lifecycle',
  templateUrl: 'lifecycle.component.html',
  styles: []
})
export class LifecycleComponent implements OnChanges,
                                           OnInit,
                                           DoCheck,
                                           AfterContentInit,
                                           AfterContentChecked,
                                           AfterViewInit,
                                           AfterViewChecked,
                                           OnDestroy {
  ngOnChanges() {
    this.log('OnChanges');
  }

  ngDoCheck() {
    this.log('DoCheck');
  }

  ngAfterContentInit() {
    this.log('AfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('AfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('AfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('AfterViewChecked');
  }

  ngOnDestroy() {
    this.log('OnDestory');
  }
  constructor() { }

  ngOnInit() {
    this.log('OnInit');
  }

  private log(hook: string){
    console.log(hook);
  }

}
