import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'dui-accordion-expansion',
  templateUrl: './accordion-expansion.component.html',
  styleUrls: ['./accordion-expansion.component.scss'],
  animations:[ 
    trigger('accordionCollapse',[
      state('closed',style({
        height: '0',
        overflow: 'hidden',
        opacity: '0',
        visibility: 'hidden'
      })),
      state('open',style({
        overflow : 'hidden'
      })),
      transition('open <=> closed',animate('200ms')) 
    ])
  ]
})
export class AccordionExpansionComponent {
  @Input() isDisable : boolean = false;
  showBody!: boolean;

  toggleBody(){
    this.showBody = !this.showBody;
  }
}
