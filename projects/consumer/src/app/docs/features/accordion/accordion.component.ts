import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  importCode = 
  `
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import {DUIAccordion} from 'david-ui-angular';
  
  @NgModule({
    declarations: [AppComponent],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      CommonModule,
      DUIAccordion
    ],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;

  accordionCode = ` <dui-accordion>
  <dui-accordion-expansion>
    <dui-accordion-header title="What is David UI Angular?"></dui-accordion-header>
    <dui-accordion-body>
      We're not always in the position that we want to be at. We're constantly growing. We're constantly making
      mistakes. We're constantly trying to express ourselves and actualize our dreams.
    </dui-accordion-body>
  </dui-accordion-expansion>
  <dui-accordion-expansion>
    <dui-accordion-header title="How to use David UI Angular?"></dui-accordion-header>
    <dui-accordion-body>
      We&apos;re not always in the position that we want to be at. We&apos;re constantly
      growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
      ourselves and actualize our dreams.
    </dui-accordion-body>
  </dui-accordion-expansion>
  <dui-accordion-expansion>
    <dui-accordion-header title="What can I do with David UI Angular?"></dui-accordion-header>
    <dui-accordion-body>
      We&apos;re not always in the position that we want to be at. We&apos;re constantly
    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
    ourselves and actualize our dreams.
    </dui-accordion-body>
  </dui-accordion-expansion>
</dui-accordion>`;


accordionWithIconCode = ` <dui-accordion>
<dui-accordion-expansion>
  <dui-accordion-header [showIcon]="true" title="What is David UI Angular?"></dui-accordion-header>
  <dui-accordion-body>
    We're not always in the position that we want to be at. We're constantly growing. We're constantly making
    mistakes. We're constantly trying to express ourselves and actualize our dreams.
  </dui-accordion-body>
</dui-accordion-expansion>
<dui-accordion-expansion>
  <dui-accordion-header [showIcon]="true" title="How to use David UI Angular?"></dui-accordion-header>
  <dui-accordion-body>
    We&apos;re not always in the position that we want to be at. We&apos;re constantly
    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
    ourselves and actualize our dreams.
  </dui-accordion-body>
</dui-accordion-expansion>
<dui-accordion-expansion>
  <dui-accordion-header [showIcon]="true" title="What can I do with David UI Angular?"></dui-accordion-header>
  <dui-accordion-body>
    We&apos;re not always in the position that we want to be at. We&apos;re constantly
  growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
  ourselves and actualize our dreams.
  </dui-accordion-body>
</dui-accordion-expansion>
</dui-accordion>`;
}
