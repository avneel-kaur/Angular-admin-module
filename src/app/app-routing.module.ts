import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { UserComponent } from './user/user.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [
  {path:'employees', component:EmployeeListComponent},
  {path:'create-employee', component:CreateEmployeeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'update-employee/:id', component:UpdateEmployeeComponent},
  {path:'employee-details/:id', component:EmployeeDetailsComponent},
  {path:'super-admin', component:SuperAdminComponent},
  {path:'user', component:UserComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
