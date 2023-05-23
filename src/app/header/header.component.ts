import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  welcomeMessage$ = this.service.userName$;

  constructor(private service: HeaderService) {}

  ngOnInit(): void {
    this.service.loadUserData();
  }

  logout() {
    this.service.logout();
  }
}
