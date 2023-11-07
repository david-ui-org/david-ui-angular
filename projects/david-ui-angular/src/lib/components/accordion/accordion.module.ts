import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionBodyComponent } from './accordion-body/accordion-body.component';
import { AccordionHeaderComponent } from './accordion-header/accordion-header.component';
import { AccordionExpansionComponent } from './accordion-expansion/accordion-expansion.component';



@NgModule({
  declarations: [
    AccordionComponent,
    AccordionHeaderComponent,
    AccordionBodyComponent,
    AccordionExpansionComponent
  ],
  imports: [
    CommonModule
    
  ],
  exports: [
    AccordionComponent,
    AccordionHeaderComponent,
    AccordionBodyComponent,
    AccordionExpansionComponent
  ]
})
export class DUIAccordion { }
