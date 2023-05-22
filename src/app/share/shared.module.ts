import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule
  ],
  exports:[
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule
  ]
})
export class SharedModule { }
