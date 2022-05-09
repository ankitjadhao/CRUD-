import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegistrationComponent } from './registration/registration.component'
import { EmployeesComponent } from './employees/employees.component'
import { CustomersComponent } from './customers/customers.component'
import { StaffComponent } from './staff/staff.component';
import { StatementComponent } from './statement/statement.component'

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'emp',
    component:EmployeesComponent
  },
  {
    path:'cust',
    component:CustomersComponent
  },
  {
    path:'staff',
    component:StaffComponent
  },
  {
    path:'state',
    component:StatementComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
