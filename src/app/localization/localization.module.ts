import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizationComponent } from './localization.component';
import { LocalizationService } from './localization.service';
import { SharedModule } from '../share/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LocalizationComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    TranslateModule,
    
  ],
  exports: [LocalizationComponent],
  providers : [LocalizationService]
})
export class LocalizationModule { }
