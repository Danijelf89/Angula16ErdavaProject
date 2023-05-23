import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SharedModule } from '../share/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { HeaderService } from './header.service';

@NgModule({
  declarations: [HeaderComponent],
  imports: [SharedModule, MatButtonModule],
  exports: [HeaderComponent],
  providers: [HeaderService]
})
export class HeaderModule {}
