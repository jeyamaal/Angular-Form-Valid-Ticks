import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataserviceService {

  private result:boolean=false;
  
  private homeValid = new BehaviorSubject<boolean>(this.result);
  homeValid$=this.homeValid.asObservable();


  constructor() { }

  homeformValid(result:boolean){
    this.result=result; 
    this.homeValid.next(this.result);
    console.log("Result Value in dataService"+" "+this.result)
  }
}
