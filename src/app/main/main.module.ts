import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../share/shared.module';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    SharedModule,
    MainRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class MainModule { }
