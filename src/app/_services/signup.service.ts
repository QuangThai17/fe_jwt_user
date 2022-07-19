import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  baseURL="http://localhost:8080/registerNewUser";

  constructor(private httpClient : HttpClient) { }

  signup(user:User): Observable<Object>{
    console.log(user);
    return this.httpClient.post(`${this.baseURL}`,user)
  }
}
