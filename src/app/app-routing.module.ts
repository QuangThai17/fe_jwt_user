import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  {  path: '', redirectTo: 'employees', pathMatch: 'full'},
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard], data: { roles: ['User'] } },
  { path: 'login', component: LoginComponent },
  { path: 'forbiden', component: ForbiddenComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  { path: 'employees-detail/:id', component: EmployeeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
