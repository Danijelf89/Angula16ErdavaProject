import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  td = new Date();

  footer = 'Erdava @' + this.td.getFullYear().toString();
}
