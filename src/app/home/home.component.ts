import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public homeForm:FormGroup;
  
  results:boolean=false;

  constructor(private homeFB: FormBuilder, private router: Router, private data: DataserviceService) { 

    this.homeForm=this.homeFB.group({
       'homeName':['',Validators.required]
       });
  
    this.onChanges(); 
  }

    //Navigate to School Page
  btnNextHomeClick = function () {
    this.router.navigateByUrl('/school');
    this.onHomeFormSubmit();
  }
  
  // Getting Form input values in console
  onHomeFormSubmit() {
    console.log(this.homeForm);
  }
  
    ngOnInit() { }


  //When form input values  changes   
    onChanges(): void {
      this.homeForm.valueChanges.subscribe(val => {

        if (this.homeForm.valid) {
          this.results = true;
          this.data.homeformValid(this.results);
          console.log("Home Value Passed" + "   " + this.results);
        } else {
          this.results = false;
          this.data.homeformValid(this.results);
          console.log("Home Value Faild" + "   " + this.results);
          alert("Home Form is invalid")
        }
      });
    }

}
