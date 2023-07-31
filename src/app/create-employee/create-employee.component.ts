import { Component, OnInit } from '@angular/core';
import { IEmployee } from './create-employee.model';
import { Employee } from '../employee';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit{
  
 employee= {} as IEmployee;
  constructor(private employeeService: EmployeeService, private router: Router){}
  ngOnInit(): void {
    
  }
goToEmployeeList(){
  this.router.navigate(['/employees']);
}
 saveEmployee(){
  this.employeeService.createEmployee(this.employee).subscribe(data =>{
    console.log(data);
    this.goToEmployeeList();
  },
  error=>console.log(error)
  );
 }

 
  public onAddEmployee(f: NgForm) {
    console.log(this.employee);
    this.saveEmployee();
  }

}
