import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(
    private userService:UserService
  ) { }
  
  signupForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  ngOnInit(): void {
  }

  onHandleSignup() {
   this.userService.signup(this.signupForm.value).subscribe(data => {
   },error => {
    return error
   }
   )
  }
}
