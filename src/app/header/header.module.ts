import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SharedModule } from '../share/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { HeaderService } from './header.service';
import { LocalizationModule } from '../localization/localization.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent],
  imports: [SharedModule, MatButtonModule, LocalizationModule, TranslateModule],
  exports: [HeaderComponent],
  providers: [HeaderService]
})
export class HeaderModule {}
