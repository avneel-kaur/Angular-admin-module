import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { IEmployee } from '../create-employee/create-employee.model';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{


  id!: number;
  employee= {} as IEmployee;
  //employee: Employee;
constructor(private employeeService: EmployeeService, private route: ActivatedRoute){}

ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.employeeService.getEmployeeById(this.id).subscribe(data=>{
    this.employee=data;
  }, error=>console.log(error));
}

}
