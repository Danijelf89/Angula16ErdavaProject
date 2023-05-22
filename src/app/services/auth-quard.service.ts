import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthQuardService {
  constructor(private router: Router, private jwtHelper: JwtHelperService) {}

  canActivate() {
    const token = localStorage.getItem('jwt');

    if (token) {
      return true;
    }

    this.router.navigate(['login']);

    return false;
  }

  eraseToke() {
    localStorage.clear();
  }
}
