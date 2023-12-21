import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
  OnInit,
} from '@angular/core';
import { DUIIcon } from '../../../shared/components/dui-icon/dui-icon.component';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'dui-accordion-header',
  templateUrl: './accordion-header.component.html',
  styleUrls: ['./accordion-header.component.scss'],
})
export class AccordionHeaderComponent implements AfterContentInit, OnInit {
  @Input({ required: true }) title!: string;
  @Input() className!: string;

  @Input() showIcon: boolean = false;
  @Input() hideDivider: boolean = false;

  hasCustomIcon: boolean = false;

  @ContentChild(DUIIcon) IconContent!: DUIIcon;

  IconClass: string = '';
  headerClass: string =
    'px-2 py-1 font-bold text-xl text-blue-gray-700 select-none hover:text-blue-gray-900';

  constructor() {}

  ngOnInit(): void {
    this.headerClass = twMerge(this.headerClass, this.className);
  }

  ngAfterContentInit() {
    if (this.IconContent) {
      this.hasCustomIcon = true;
    }
  }
}
