import { Component } from '@angular/core';
import { Property } from '../../../shared/model/property.model';

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

accordionAlwaysOpenCode = `  <dui-accordion>
  <dui-accordion-expansion [alwaysOpen]="true">
    <dui-accordion-header
      [showIcon]="true"
      title="What is David UI Angular?"
    >
    </dui-accordion-header>
    <dui-accordion-body>
      We're not always in the position that we want to be at. We're
      constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.
    </dui-accordion-body>
  </dui-accordion-expansion>
  <dui-accordion-expansion>
    <dui-accordion-header
      [showIcon]="true"
      title="How to use David UI Angular?"
    ></dui-accordion-header>
    <dui-accordion-body>
      We&apos;re not always in the position that we want to be at.
      We&apos;re constantly growing. We&apos;re constantly making
      mistakes. We&apos;re constantly trying to express ourselves and
      actualize our dreams.
    </dui-accordion-body>
  </dui-accordion-expansion>
  <dui-accordion-expansion>
    <dui-accordion-header
      [showIcon]="true"
      title="What can I do with David UI Angular?"
    ></dui-accordion-header>
    <dui-accordion-body>
      We&apos;re not always in the position that we want to be at.
      We&apos;re constantly growing. We&apos;re constantly making
      mistakes. We&apos;re constantly trying to express ourselves and
      actualize our dreams.
    </dui-accordion-body>
  </dui-accordion-expansion>
  </dui-accordion>`;


  accordionDisabledCode = `  <dui-accordion>
  <dui-accordion-expansion [isDisable]="true">
    <dui-accordion-header
      [showIcon]="true"
      title="What is David UI Angular?"
    >
    </dui-accordion-header>
    <dui-accordion-body>
      We're not always in the position that we want to be at. We're
      constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.
    </dui-accordion-body>
  </dui-accordion-expansion>
  <dui-accordion-expansion>
    <dui-accordion-header
      [showIcon]="true"
      title="How to use David UI Angular?"
    ></dui-accordion-header>
    <dui-accordion-body>
      We&apos;re not always in the position that we want to be at.
      We&apos;re constantly growing. We&apos;re constantly making
      mistakes. We&apos;re constantly trying to express ourselves and
      actualize our dreams.
    </dui-accordion-body>
  </dui-accordion-expansion>
  <dui-accordion-expansion>
    <dui-accordion-header
      [showIcon]="true"
      title="What can I do with David UI Angular?"
    ></dui-accordion-header>
    <dui-accordion-body>
      We&apos;re not always in the position that we want to be at.
      We&apos;re constantly growing. We&apos;re constantly making
      mistakes. We&apos;re constantly trying to express ourselves and
      actualize our dreams.
    </dui-accordion-body>
  </dui-accordion-expansion>
  </dui-accordion>`;

  accordionWithCustomStyleCode = ` <dui-accordion>
    <dui-accordion-expansion
    [alwaysOpen]="true"
      className="mb-2 rounded-lg border border-blue-gray-100 px-4"
    >
      <dui-accordion-header
        title="What is David UI Angular?"
        className="border-b-0 transition-colors text-blue-500 hover:!text-blue-700"
      >
      </dui-accordion-header>
      <dui-accordion-body className="pt-0 text-base font-normal">
        We're not always in the position that we want to be at. We're
        constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.
      </dui-accordion-body>
    </dui-accordion-expansion>
    <dui-accordion-expansion
      className="mb-2 rounded-lg border border-blue-gray-100 px-4"
    >
      <dui-accordion-header
        title="How to use David UI Angular?"
      ></dui-accordion-header>
      <dui-accordion-body className="pt-0 text-base font-normal">
        We&apos;re not always in the position that we want to be at.
        We&apos;re constantly growing. We&apos;re constantly making
        mistakes. We&apos;re constantly trying to express ourselves and
        actualize our dreams.
      </dui-accordion-body>
    </dui-accordion-expansion>
    <dui-accordion-expansion
      className="mb-2 rounded-lg border border-blue-gray-100 px-4"
    >
      <dui-accordion-header
        title="What can I do with David UI Angular?"
      ></dui-accordion-header>
      <dui-accordion-body className="pt-0 text-base font-normal">
        We&apos;re not always in the position that we want to be at.
        We&apos;re constantly growing. We&apos;re constantly making
        mistakes. We&apos;re constantly trying to express ourselves and
        actualize our dreams.
      </dui-accordion-body>
    </dui-accordion-expansion>
  </dui-accordion>`;
  accordionProperties: Property[] = [
    {attribute : "isDisable",type:"boolean",description : "disable accordion component",default : "false"},
    {attribute : "alwaysOpen",type:"boolean",description : "set default to open accordion component",default : "false"},
    {attribute : "className",type:"string",description : "Add custom className for accordion expansion",default : "''"},

  ];

  headerProperties: Property[] = [
    {attribute : "hideDivider",type:"boolean",description : "show or hide accordion divider",default : "false"},
    {attribute : "showIcon",type:"boolean",description : "Add or remove the icon",default : "false"},
    {attribute : "className",type:"string",description : "Add custom className for accordion header",default : "'"},
    {attribute : "title",type:"string",description : "required property to add title to accordion header",default : "''"},

  ];
}
