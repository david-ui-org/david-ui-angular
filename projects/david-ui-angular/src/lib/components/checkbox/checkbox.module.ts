import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';
import { FormsModule } from '@angular/forms';
import { DuiRipple } from '../../shared/directive/dui-ripple.directive';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [CommonModule, FormsModule,DuiRipple],
  exports: [CheckboxComponent],
})
export class DUICheckbox {}
