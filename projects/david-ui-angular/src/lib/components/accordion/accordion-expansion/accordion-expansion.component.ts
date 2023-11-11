import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
} from '@angular/core';
import { AccordionHeaderComponent } from '../accordion-header/accordion-header.component';

@Component({
  selector: 'dui-accordion-expansion',
  templateUrl: './accordion-expansion.component.html',
  styleUrls: ['./accordion-expansion.component.scss'],
  animations: [
    trigger('accordionCollapse', [
      state(
        'closed',
        style({
          height: '0',
          overflow: 'hidden',
          opacity: '0',
          visibility: 'hidden',
        })
      ),
      state(
        'open',
        style({
          overflow: 'hidden',
        })
      ),
      transition('open <=> closed', animate('200ms')),
    ]),
  ],
})
export class AccordionExpansionComponent implements AfterContentInit {
  @Input() isDisable: boolean = false;
  showBody!: boolean;

  @ContentChild(AccordionHeaderComponent)
  accordionHeader!: AccordionHeaderComponent;

  toggleBody() {
    this.showBody = !this.showBody;
    if (this.showBody) {
      this.accordionHeader.IconClass =
        'rotate-180 h-5 w-5 transition-transform';
    } else {
      this.accordionHeader.IconClass = 'h-5 w-5 transition-transform';
    }
  }

  ngAfterContentInit(): void {
    this.accordionHeader.IconClass = 'h-5 w-5 transition-transform';
  }
}
