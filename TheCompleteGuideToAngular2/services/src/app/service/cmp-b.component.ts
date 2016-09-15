import { Component } from '@angular/core';
import { DataService } from './data.service';
import { LogService } from './log.service';

@Component({
    moduleId: module.id,
    selector: 'si-cmp-b',
    templateUrl: 'cmp-b.component.html'
})
export class CmpBComponent{
  public value: string;
  public items: Array<string>;

  constructor(private logService: LogService,
              private dataService: DataService){
    this.value = '';
    this.items = [];
  }

  public onLog(value: string) {
    this.logService.writeToLog(value);
  }

  public onStore(value: string) {
    this.dataService.addData(value);
  }

  public onGet() {
    this.items = this.dataService.getData();
  }

  public onSend(value: string) {

  }
}
