import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DUIChipComponent } from './chip.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DUIChipComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DUIChipComponent
  ]
})
export class DUIChip { }
