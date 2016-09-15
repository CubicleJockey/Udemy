import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from "./log.service";

@Injectable()
export class DataService {
  private data: Array<string>;
  public pushedData: EventEmitter<string>;

  constructor(private logService: LogService){
    this.data = [];
    this.pushedData = new EventEmitter<string>();
  }

  public addData(input: string){
    this.data.push(input);
    this.logService.writeToLog('Saved item: ' + input);
  }

  public getData(){
    return this.data;
  }

  public pushData(value: string){
    this.pushedData.emit(value);
  }
}
