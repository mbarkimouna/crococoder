import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any={};
  loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,
              private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[""],
      password:[""]
    })
  }
  login(){
   console.log("here my object",this.user);
   
 }
}
