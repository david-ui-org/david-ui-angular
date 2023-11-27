import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DUISliderComponent } from './slider.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DUISliderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DUISliderComponent
  ]
})
export class DUISlider { }
