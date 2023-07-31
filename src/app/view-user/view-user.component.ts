import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../employee-list/employee-list.model';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit{
  id!: number;
  employees= {} as Employee;
  //employee: Employee;
constructor(private employeeService: EmployeeService, private route: ActivatedRoute){}

ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.employeeService.getEmployeeById(this.id).subscribe(data=>{
    this.employees=data;
  }, error=>console.log(error));
}
}
