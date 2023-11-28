import { Component } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent {
  public importCode = ` import { DUIButton } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUIButton],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;
  buttonCode = ` <!-- Use DUI Button in html file -->
  <dui-button size="md" color="gray"> Button </dui-button>
  `;

}
