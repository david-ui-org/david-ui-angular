import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert.component';
import { DUIIcon } from '../../shared/components/dui-icon/dui-icon.component';

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule,DUIIcon],
  exports: [AlertComponent],
})
export class DUIAlert {
  
}
