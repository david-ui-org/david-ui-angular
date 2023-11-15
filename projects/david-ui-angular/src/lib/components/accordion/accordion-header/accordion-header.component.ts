import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
} from '@angular/core';
import { DUIIcon } from '../../../shared/components/dui-icon/dui-icon.component';

@Component({
  selector: 'dui-accordion-header',
  templateUrl: './accordion-header.component.html',
  styleUrls: ['./accordion-header.component.scss'],
})
export class AccordionHeaderComponent implements AfterContentInit {
  @Input({ required: true }) title!: string;

  @Input() showIcon: boolean = false;

  hasCustomIcon: boolean = false;

  @ContentChild(DUIIcon) IconContent!: DUIIcon;

  IconClass: string = '';

  constructor() {}

  ngAfterContentInit() {
    if (this.IconContent) {
      this.hasCustomIcon = true;
    }
  }
}
