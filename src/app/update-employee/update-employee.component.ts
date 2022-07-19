import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../_services/employee.service';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id: any;
  employee: any
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) {}

  //
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(parseInt(this.id)).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));

  }

  onSubmit() {
    this.employeeService.updateEmployee(this.employee).subscribe(data => {
      this.goToEmployeelList();
    }
    ,error=> console.log(error));

  }
    goToEmployeelList(){
      this.router.navigate(['/employees']);
    }
  }

