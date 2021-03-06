import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/validators/mustMatch';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!:FormGroup;
  constructor(private formBuilder:FormBuilder)  {
    
  } 

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName:['',[Validators.minLength(3),Validators.required]],
      lastName:['',[Validators.minLength(4),Validators.required]],
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.minLength(8),Validators.required]],
      confirmPwd:['']
    },
    {
     validator:MustMatch('password','confirmPwd')
    }
    
    )
  }
  signup(x:any){
    let users = JSON.parse(localStorage.getItem('users')||'[]');
    users.push(x);
    localStorage.setItem('users',JSON.stringify(users));
    //localStrorage.removeItem('users');
    console.log("here my object",x)
  }

}
