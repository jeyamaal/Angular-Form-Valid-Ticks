import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { SchoolComponent } from '../school/school.component';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(private data:DataserviceService) { }
   
   saveAndSubmit=function(){
      console.log("It's Work Component"); 
}

  ngOnInit() {  }

}
