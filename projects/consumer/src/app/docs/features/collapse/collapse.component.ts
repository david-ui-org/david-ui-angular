import { Component } from '@angular/core';
import { Property } from '../../../shared/model/property.model';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
})
export class CollapseComponent {
  importCode: string = ` import { DUICollapse } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUICollapse],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;
  collapseCode: string = `  <!-- Use DUI Collapse in html file -->
  <dui-button (click)="toggleCollapse()">Toggle Collapse</dui-button>
  <dui-collapse [open]="open" className="my-4 mx-auto w-8/12">
    <dui-typography>
      Use our Tailwind CSS collapse for your website. You can use if for
      accordion, collapsible items and much more.
    </dui-typography>
  </dui-collapse>`;

  collapseProperties: Property[] = [
    {
      attribute: 'className',
      type: 'string',
      description: 'Add custom className for collapse',
      default: "''",
    },
    {
      attribute: 'open',
      type: 'boolean',
      description: 'Change collapse visibility',
      default: 'false',
    },
  ];

  open: boolean = false;
  toggleCollapse() {
    this.open = !this.open;
  }
}
