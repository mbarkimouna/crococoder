import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    })
  }
  signup(){
    alert('btn click')
  }

}
