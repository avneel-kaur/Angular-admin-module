import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAdmin } from './register.model';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { NavBarService } from '../nav-bar.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  admin= {} as IAdmin;
  constructor(private  router: Router, private adminService: AdminService, private navbarService: NavBarService){}
  
  saveAdmin(){
    this.adminService.createAdmin(this.admin).subscribe(data =>{
      console.log(data);
      this.goToLogin();
    },
        error=>console.log(error)
    );
   }
  goToLogin() {
    this.router.navigate(['/login']);
  }
  public onAddAdmin(f: NgForm) {
    console.log(this.admin);
     this.saveAdmin()
  }
  ngOnDestroy(): void {
    this.navbarService.display();
  }

  ngOnInit(): void {
    this.navbarService.hide();
  }
}
