import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadiobuttonComponent } from './radiobutton.component';
import { FormsModule } from '@angular/forms';
import { DuiRipple } from '../../shared/directive/dui-ripple.directive';



@NgModule({
  declarations: [
    RadiobuttonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DuiRipple
  ],
  exports: [
    RadiobuttonComponent
  ]
})
export class DUIRadio { }
