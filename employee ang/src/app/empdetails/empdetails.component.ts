import { Component, OnInit } from '@angular/core';
import { ApidefService } from '../apidef.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
  users: any;

  constructor(public service:ApidefService) { }

  ngOnInit() {
    this.service.employeelist()
    .subscribe((data)=>this.users=data);
  }

}
