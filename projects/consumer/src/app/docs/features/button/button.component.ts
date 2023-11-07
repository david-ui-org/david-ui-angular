import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  public importCode = 
` import { DUIButton } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUIButton],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;
  buttonCode = 
  ` <!-- Use DUI Button in html file -->
  <dui-button size="md" color="gray"> Button </dui-button>
  `;

  outlinedButton = 
  `<!-- Use DUI Button in html file -->
  <dui-button size="md" variant="filled" color="gray">Filled</dui-button>
  <dui-button size="md" variant="outlined" color="gray">Outlined</dui-button>
  <dui-button size="md" variant="text" color="gray">Text</dui-button>
  <dui-button size="md" variant="gradient" color="gray">Gradient</dui-button>
  `;

  butoonSizeCode = 
  ` <!-- Use DUI Button in html file -->
  <dui-button size="sm" color="gray">Button</dui-button>
  <dui-button size="md" color="gray">Button</dui-button>
  <dui-button size="lg" color="gray">Button</dui-button>
  `;
  butoonColorCode = 
  ` <!-- Use DUI Button in html file -->
  <dui-button size="md" color="gray">Button</dui-button>
  <dui-button size="md" color="blue">Button</dui-button>
  <dui-button size="md" color="red">Button</dui-button>
  <dui-button size="md" color="green">Button</dui-button>
  `;
}
