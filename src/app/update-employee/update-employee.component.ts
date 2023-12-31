import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../create-employee/create-employee.model';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  id!: number;
  employee= {} as IEmployee;


  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    }, error=>console.log(error));
  }

  public onUpdate(f: NgForm) {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data=>{
      this.goToEmployeeList();
    }, error=>console.log(error));
    console.log(this.employee);
    
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
