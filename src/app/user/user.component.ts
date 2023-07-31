import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from '../employee.service';
import { IEmployee } from './employee.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  employees= {} as IEmployee;
 
  constructor(private router:Router, private employeeService: EmployeeService){}

  ngOnInit(): void {
   
  }
 
  onAdmin(id: number){
    this.router.navigate(['employee-details', id]);
  }
}
