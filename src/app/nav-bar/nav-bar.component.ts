import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavBarService } from '../nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnDestroy{
  showNavbar:boolean=true;
  subscription!: Subscription;
  constructor(private navbarServices: NavBarService, private router: Router){
    this.subscription=this.navbarServices.showNavbar.subscribe((value)=>{
      this.showNavbar=value;
    })
  }
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }

  logout(){
    confirm("Go to login page");
    this.router.navigate(["/login"])
  }
}
