import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DUISwitchComponent } from './switch.component';
import { FormsModule } from '@angular/forms';
import { DuiRipple } from '../../shared/directive/dui-ripple.directive';



@NgModule({
  declarations: [
    DUISwitchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DuiRipple
  ],
  exports: [
    DUISwitchComponent
  ]
})
export class DUISwitch { }
