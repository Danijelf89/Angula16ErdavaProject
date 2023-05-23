import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  login(userData : FormGroup){
    if(!userData.valid){
      console.log('insert all', userData.value);
      return;
    }
    console.log('user data', userData.value);
    localStorage.setItem('jwt', 'novi_token');
    localStorage.setItem('username', 'Danijel Filipovic');
    this.router.navigate(['']);
  }
}
