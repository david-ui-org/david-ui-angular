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

  buttonBlockCode = ` <!-- Use DUI Button Group in html file -->
  <div class="w-full">
    <dui-button-group color="gray" [fullWidth]="true" >
      <dui-button class="w-full" >One</dui-button>
      <dui-button class="w-full">Two</dui-button>
      <dui-button class="w-full">Three</dui-button>
    </dui-button-group>
  </div>
  `;

  buttonGroupCode = ` <!-- Use DUI Button Group in html file -->
  <dui-button-group color="gray">
    <dui-button>One</dui-button>
    <dui-button>Two</dui-button>
    <dui-button>Three</dui-button>
  </dui-button-group>
  `;

  variantGroupButtons = `<!-- Use DUI Button Group in html file -->
  <div class="flex w-max flex-col gap-3">
    <dui-button-group color="gray">
      <dui-button>One</dui-button>
      <dui-button>Two</dui-button>
      <dui-button>Three</dui-button>
    </dui-button-group>
    <dui-button-group variant="gradient" color="gray">
      <dui-button>One</dui-button>
      <dui-button>Two</dui-button>
      <dui-button>Three</dui-button>
    </dui-button-group>
    <dui-button-group variant="outlined" color="gray">
      <dui-button>One</dui-button>
      <dui-button>Two</dui-button>
      <dui-button>Three</dui-button>
    </dui-button-group>
    <dui-button-group variant="text" color="gray">
      <dui-button>One</dui-button>
      <dui-button>Two</dui-button>
      <dui-button>Three</dui-button>
    </dui-button-group>

  </div>
  `;

  buttonGroupSizeCode = ` <!-- Use DUI Button Group in html file -->
  <div class="flex w-max flex-col gap-3">
    <dui-button-group size="sm" color="gray">
      <dui-button>One</dui-button>
      <dui-button>Two</dui-button>
      <dui-button>Three</dui-button>
    </dui-button-group>
    <dui-button-group size="md" color="gray">
        <dui-button>One</dui-button>
        <dui-button>Two</dui-button>
        <dui-button>Three</dui-button>
      </dui-button-group>
      <dui-button-group size="lg" color="gray">
        <dui-button>One</dui-button>
        <dui-button>Two</dui-button>
        <dui-button>Three</dui-button>
      </dui-button-group>
      
  </div>
  `;
  buttonGroupColorCode = ` <!-- Use DUI Button Group in html file -->
  <dui-button size="md" color="gray">Button</dui-button>
  <dui-button size="md" color="blue">Button</dui-button>
  <dui-button size="md" color="red">Button</dui-button>
  <dui-button size="md" color="green">Button</dui-button>
  `;

  rippleEffectButton: string = ` 
  <div class="flex w-max flex-col gap-3">
      <dui-button-group color="gray" [ripple]="true">
        <dui-button>One</dui-button>
        <dui-button>Two</dui-button>
        <dui-button>Three</dui-button>
      </dui-button-group>
      <dui-button-group color="gray" [ripple]="false">
        <dui-button>One</dui-button>
        <dui-button>Two</dui-button>
        <dui-button>Three</dui-button>
      </dui-button-group>
  </div>`;

}
