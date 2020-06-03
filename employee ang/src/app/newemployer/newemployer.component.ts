import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { ApidefService } from '../apidef.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newemployer',
  templateUrl: './newemployer.component.html',
  styleUrls: ['./newemployer.component.css']
})

export class NewemployerComponent implements OnInit {
 User:user = new user(0,"","",0,0);
  message: any;
  constructor(public service: ApidefService) { }

  ngOnInit(): void {
  }
public registerNow(){
   this.service.newEmployer(this.User)
   .subscribe((data)=>this.message=data);
}
}
