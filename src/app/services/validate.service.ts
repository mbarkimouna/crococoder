import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }
  static matchingConfirmPasswords(passwordKey: any) { 
    let passwordInput = passwordKey['value']; 
    if (passwordInput.Password === passwordInput.ConfirmPassword) { 
        return null; 
    } 
    else { 
        return passwordKey.controls['ConfirmPassword'].setErrors({ passwordNotEquivalent: true }); 
    } 
}
}
