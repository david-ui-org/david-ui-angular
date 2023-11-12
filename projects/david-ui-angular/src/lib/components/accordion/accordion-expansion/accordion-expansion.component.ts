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
  OnInit,
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
export class AccordionExpansionComponent implements OnInit, AfterContentInit {
  @Input() isDisable: boolean = false;
  @Input() alwaysOpen: boolean = false;
  showBody!: boolean;

  @ContentChild(AccordionHeaderComponent)
  accordionHeader!: AccordionHeaderComponent;

  toggleBody() {
    this.showBody = !this.showBody;
    this.setIconClass();
  }

  ngOnInit(): void {
    this.showBody = this.alwaysOpen;
  }

  ngAfterContentInit(): void {
    this.setIconClass();
  }

  setIconClass(): void {
    this.accordionHeader.IconClass = this.showBody
      ? 'rotate-180 h-5 w-5 transition-transform'
      : 'h-5 w-5 transition-transform';
  }
}
