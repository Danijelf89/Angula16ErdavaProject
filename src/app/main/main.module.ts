import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../share/shared.module';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { TranslateModule } from '@ngx-translate/core';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MainService } from './main.service';
import { YesNoDialogComponent } from '../dialogs/yes-no-dialog/yes-no-dialog.component';
import { InfoDialogComponent } from '../dialogs/info-dialog/info-dialog.component';

@NgModule({
  declarations: [
    MainComponent,
    YesNoDialogComponent,
    InfoDialogComponent
  ],



  imports: [
    SharedModule,
    MainRoutingModule,
    HeaderModule,
    FooterModule,
    MatButtonModule,
    MatGridListModule,
    TranslateModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatDialogModule
  ],

  
  providers: [MainService]
})
export class MainModule { }
