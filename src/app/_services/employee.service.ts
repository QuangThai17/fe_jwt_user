import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http' ;
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private baseURL = "http://localhost:8080/employees";

  constructor(private httpClient: HttpClient) { }

  getEmployeesList() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`)
  }

  getEmployeeById(id:number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/create`,employee)
  }

  updateEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.put<Object>(`${this.baseURL}/update/${employee.id}`, employee);
    }

  deleteEmployee(id:number): Observable<Object>{
    return this.httpClient.delete<Object>(`${this.baseURL}/delete/${id}`);
  }
}