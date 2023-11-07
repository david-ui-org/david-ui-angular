import { Component, Input } from '@angular/core';

@Component({
  selector: 'dui-accordion-header',
  templateUrl: './accordion-header.component.html',
  styleUrls: ['./accordion-header.component.scss']
})
export class AccordionHeaderComponent {
  @Input({required : true}) title!: string;
  showBody!: boolean;

  constructor(){
    
  }



}
