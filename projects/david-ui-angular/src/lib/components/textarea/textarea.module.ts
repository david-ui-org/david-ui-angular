import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaComponent } from './textarea.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TextareaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TextareaComponent
  ]
})
export class DUITextarea { }
