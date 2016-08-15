import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild,
  ContentChild
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

  @ContentChild('boundContent')
  boundContent: HTMLElement;

  @ViewChild('boundableParagraph')
  boundParagraph: HTMLElement;

  @Input()
  bindable: number = 1000;

  ngOnChanges() {
    this.log('OnChanges');
  }

  ngDoCheck() {
    this.log('DoCheck');
  }

  ngAfterContentInit() {
    this.log('AfterContentInit');
    console.log(this.boundContent);
  }

  ngAfterContentChecked() {
    this.log('AfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('AfterViewInit');
    console.log(this.boundParagraph);
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
