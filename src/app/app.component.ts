import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from './dataservice.service';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormArray, FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  appFormValid='';

  boolValue:boolean=false;
  boolShowGTMDetails: any;
  subscription: Subscription;

  public appForm:FormGroup;
  

 
  constructor(private router:Router, private data:DataserviceService,private appfb:FormBuilder){

  this.appForm=this.appfb.group({
      'appName':['',Validators.required]

    
  })


   //Getting boolValue from homeValid$ subsription - Method-1
   this.data.homeValid$.subscribe(boolValue => this.boolValue=boolValue); 

   // Getting boolValue from homeValid$ subsription - Method-2
  //  this.subscription = this.data.homeValid$.subscribe(
  //     (data:boolean) => { this.boolShowGTMDetails = data, 
  //     error => console.log(error),
  //     () => console.log("Wins")
  //   }
  // ); 
  //this.onChanges();





      // console.log("Value in App componenet"+" "+this.boolShowGTMDetails )  
    
      // console.log("Value in App componenet -  BoolValue"+" "+this.boolValue)  
}


   
  ngOnInit() {

    // this.data.homeValid$.subscribe(boolValue => this.boolValue=boolValue);
    // console.log(this.boolValue);

  }
      onChanges(): void {
      this.appForm.valueChanges.subscribe(val => {

                   this.data.homeValid$.subscribe(boolValue => this.boolValue = boolValue);
              if (this.appForm.valid) {



              }

       this.data.homeValid$.subscribe(boolValue => this.boolValue = boolValue);

          if(this.boolValue==true){
             this.appFormValid="Myso";
             console.log("appFormValid"+this.appFormValid);

          }

          else
          {

            this.appFormValid="";
          } 


        console.log(this.boolValue);
     
      });
    }

 
}
