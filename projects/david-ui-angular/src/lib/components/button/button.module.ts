import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from './button.component';
import { DUIIcon } from '../../shared/components/dui-icon/dui-icon.component';
import { DuiRipple } from '../../shared/directive/dui-ripple.directive';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule,FormsModule,DUIIcon,DuiRipple],
  exports: [ButtonComponent],
})
export class DUIButton {}
