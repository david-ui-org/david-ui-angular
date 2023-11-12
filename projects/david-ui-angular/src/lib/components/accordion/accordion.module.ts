import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionBodyComponent } from './accordion-body/accordion-body.component';
import { AccordionHeaderComponent } from './accordion-header/accordion-header.component';
import { AccordionExpansionComponent } from './accordion-expansion/accordion-expansion.component';
import { DUIIcon } from '../../shared/components/dui-icon/dui-icon.component';



@NgModule({
  declarations: [
    AccordionComponent,
    AccordionHeaderComponent,
    AccordionBodyComponent,
    AccordionExpansionComponent,
  ],
  imports: [
    CommonModule,
    DUIIcon
  ],
  exports: [
    AccordionComponent,
    AccordionHeaderComponent,
    AccordionBodyComponent,
    AccordionExpansionComponent,
  ]
})
export class DUIAccordion { }
