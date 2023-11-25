import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  importCode: string = ` import { DUISwitch } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUISwitch],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;

  switchCode: string=`  <!-- Use DUI Switch in html file -->
  <dui-switch color="gray"></dui-switch>`;
  switchColorCode: string=`  <!-- Use DUI Switch in html file -->
  <dui-switch color="gray" [isChecked]="true"></dui-switch>
  <dui-switch color="red"  [isChecked]="true"></dui-switch>
  <dui-switch color="purple" [isChecked]="true"></dui-switch>`;

  switchLabel: string=`  <!-- Use DUI switch in html file -->
  <dui-switch color="gray" label="Auto Recharge" [isChecked]="true"></dui-switch>`;

}
