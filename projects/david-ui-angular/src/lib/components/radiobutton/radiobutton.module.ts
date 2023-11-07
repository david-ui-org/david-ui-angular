import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadiobuttonComponent } from './radiobutton.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RadiobuttonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RadiobuttonComponent
  ]
})
export class DUIRadio { }
