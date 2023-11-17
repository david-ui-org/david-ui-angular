import { Component } from '@angular/core';

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
<dui-collapse [open]="open">
<div class="shadow-md w-auto mt-4">Hi there collapse component</div>
</dui-collapse>`;

  open: boolean = false;
  toggleCollapse() {
    this.open = !this.open;
  }
}
