import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { IAdmin } from './login.model';
import { NavBarService } from '../nav-bar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  admin= {} as IAdmin;
  model: any={};
  getData: any;
  constructor(private  router: Router, private adminService: AdminService, private navbarService: NavBarService){}
  ngOnDestroy(): void {
    this.navbarService.display();
  }

  ngOnInit(): void {
    this.navbarService.hide();
  }

  public onAdmin() {
    var user = this.model.name;
    var password = this.model.password;
    
    if(user=='Avneel' && password=='Bajaj'){
      this.router.navigate(["/super-admin"]);

    }
     else{
      this.adminService.validateLogin(user, password)
      .subscribe((res: any) => {
        this.getData = res;
        console.log(res)
        console.log(user)
        console.log(password)
        if (this.getData == 1) {
         this.router.navigate(["/employees"])
        } else {
          alert("Invalid users")
          //
        }
      });
     }
 
    
  }
}
