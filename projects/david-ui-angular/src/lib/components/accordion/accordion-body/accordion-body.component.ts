import { Component, Input, OnInit } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'dui-accordion-body',
  templateUrl: './accordion-body.component.html',
  styleUrls: ['./accordion-body.component.scss']
})
export class AccordionBodyComponent implements OnInit {

  @Input() className! :  string

  bodyClass = 'px-2 block w-full py-4 text-gray-700 antialiased font-sans text-sm font-light leading-normal'
  ngOnInit(): void {
    this.bodyClass =  twMerge(this.bodyClass,this.className)
  }

}
