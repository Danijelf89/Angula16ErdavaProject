import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

  footer$ = this.service.footerData$;

  constructor(private service: FooterService) {}
  ngOnInit(): void {
    this.service.loadData();
  }
}
