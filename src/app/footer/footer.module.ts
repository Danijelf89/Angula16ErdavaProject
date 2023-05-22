import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SharedModule } from '../share/shared.module';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    SharedModule
  ],
  exports:[
    FooterComponent
  ]
})
export class FooterModule { }
