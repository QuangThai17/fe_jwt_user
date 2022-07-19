import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { SignupService } from '../_services/signup.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();

  constructor(
    private userService: UserService,
    private router: Router,
    private signupService: SignupService
  ) { }

  ngOnInit(): void {
  }

  userRegister() {
    console.log(this.user);
    this.signupService.signup(this.user).subscribe(data => {
      alert("Success!");
    }, error => ("Sorry User not Registe"));
  }

}
