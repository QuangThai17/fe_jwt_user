import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id : any;
  employees : any;

  constructor(private employeeService:EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe((data: any)=> {
        this.employees = data;
    });
  }

  employeeDetail(id:number){
    this.router.navigate(['employees-detail', id]);
  }
  
  updateEmployee(id : number){
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id : number){
    this.employeeService.deleteEmployee(id).subscribe((data: any)=> {
      console.log(data);
      this.getEmployees();  
  })
  
  }
}
