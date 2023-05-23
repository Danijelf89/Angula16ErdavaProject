import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  userName$: Observable<string>;
  private userNameSubject = new BehaviorSubject<string>('');

  constructor(private router: Router) { 

    this.userName$ = this.userNameSubject.asObservable();
  }

  loadUserData(){
    let userName = localStorage.getItem('username');

    this.userNameSubject.next(userName!);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
