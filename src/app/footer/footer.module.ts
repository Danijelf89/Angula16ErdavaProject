import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SharedModule } from '../share/shared.module';
import { FooterService } from './footer.service';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    SharedModule
  ],
  exports:[
    FooterComponent
  ],
  providers: [FooterService]
})
export class FooterModule { }
