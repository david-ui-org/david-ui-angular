import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconbuttonComponent } from './iconbutton.component';
import { FormsModule } from '@angular/forms';
import { DuiRipple } from '../../shared/directive/dui-ripple.directive';



@NgModule({
  declarations: [
    IconbuttonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DuiRipple
  ],
  exports: [
    IconbuttonComponent
  ]
})
export class DUIIconButton { }
