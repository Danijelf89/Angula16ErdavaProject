import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SharedModule } from '../share/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HeaderComponent],
  imports: [SharedModule, MatButtonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
