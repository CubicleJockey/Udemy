import { Injectable } from '@angular/core';
import { LogService } from "./log.service";

@Injectable()
export class DataService {
  private data: Array<string>;

  constructor(private logService: LogService){
    this.data = [];
  }

  public addData(input: string){
    this.data.push(input);
    this.logService.writeToLog('Saved item: ' + input);
  }

  public getData(){
    return this.data;
  }
}
