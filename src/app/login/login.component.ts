import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  userData = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  LogIn()
  {
    if(!this.userData.valid){
      console.log('insert all', this.userData.value);
      return;
    }
    console.log('user data', this.userData.value);
    localStorage.setItem('jwt', 'novi_token');
    localStorage.setItem('username', 'Danijel Filipovic');
    this.router.navigate(['']);


  }

 

}
