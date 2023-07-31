import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit{

 admins!:Admin[];
  constructor(private adminService:AdminService, private router:Router){}
  ngOnInit(): void {
      this.getAdmins();
  }

  getAdmins(){
this.adminService.getAllAdmin().subscribe(data=>{
  this.admins=data;
  console.log(data);
});
  }

  accept(admin: Admin){
      
  }

  delete(id: number){
    this.adminService.deleteAdmin(id).subscribe(data=>{
      this.getAdmins();
    }, error=>console.log(error));
  }
}
