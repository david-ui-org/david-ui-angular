import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule,FormsModule],
  exports: [InputComponent],
})
export class DUIInput { }
