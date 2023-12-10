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
    <dui-collapse [open]="open" className="pt-1">
      <p class="shadow-md hover:shadow-lg hover:shadow-gray-900 shadow-gray-500 h-auto w-auto mt-4">
        Hi there collapse component
      </p>
    </dui-collapse>`;

  collapseProperties: Property[] = [
    {
      attribute: 'className',
      type: 'string',
      description: 'Add custom className for collapse',
      default: '',
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
