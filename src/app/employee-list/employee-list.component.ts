import { Component, OnInit } from '@angular/core';

import { IEmployee } from './employee-list.model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  
  employees = [] as IEmployee[];
  searchText!:any;
  employee!:IEmployee
  id!: number;
  constructor(private employeeService: EmployeeService, private router: Router){}
  ngOnInit(): void {
    this.getEmployees();
   
  }
  public sweetAlert(id:number){
    this.id=id;
    this.employee=new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
      console.log(this.employee);
      Swal.fire(`ID : ${this.employee.id} | Name : ${this.employee.firstName} ${this.employee.lastName} | Mobile Number : ${this.employee.mobileNumber} | 
      Role : ${this.employee.role} | City : ${this.employee.city} | Email Id :${this.employee.emailId} | Year of Experience :${this.employee.yop} 
      `)
      
      

   });
    
  }
  sortNames() {
    this.employees.sort((a, b) => (a.firstName as string).localeCompare(b.firstName as string));
    console.log(this.employees);
  }
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data=>{
      this.employees= data;
    });
  }
  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }
  updateEmployee(id: number){
     this.router.navigate(['update-employee', id]);
  }

  

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      this.getEmployees();
    })
  }
}
