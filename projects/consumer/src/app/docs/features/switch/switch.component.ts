import { Component } from '@angular/core';
import { Property } from '../../../shared/model/property.model';

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

  rippleSwitch: string= ` <!-- Use DUI switch in html file -->
  <dui-switch color="gray" label="Ripple Effect On" [isChecked]="true" [ripple]="true" >
  </dui-switch>
  <dui-switch color="gray" label="Ripple Effect Off" [isChecked]="true" [ripple]="false">
  </dui-switch>`;

  disabledSwitch: string= ` <!-- Use DUI switch in html file -->
  <dui-switch color="gray" label="Remember Me" [isChecked]="true" [disabled]="true" > 
  </dui-switch>
  <dui-switch color="gray" label="Remember Me" [disabled]="true"></dui-switch>`;

  switchDescription: string=`  <!-- Use DUI Switch in html file -->
  <dui-switch color="gray" label="Remember me">
    <div>
      <dui-typography color="gray" variant="small" className="font-normal">
        You&apos;ll be able to login without password for 24 hours.
      </dui-typography>

    </div>
  </dui-switch>`;



  switchTypeColor: string = 
  ` type colors =
  | "blue-gray"
  | "gray"
  | "brown"
  | "deep-orange"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "light-green"
  | "green"
  | "teal"
  | "cyan"
  | "light-blue"
  | "blue"
  | "indigo"
  | "deep-purple"
  | "purple"
  | "pink"
  | "red";`;


  switchProperties: Property[] = [
    {attribute : "label",type:"string",description : "switch label",default : "''"},
    {attribute : "color",type:"Color",description : "change switch color",default : "blue"},
    {attribute : "className",type:"string",description : "Add custom className for switch",default : "''"},
    {attribute : "size",type:"boolean",description : "Change switch size",default : "md"},
    {attribute : "disabled",type:"boolean",description : "Disable switch",default : "false"},
    {attribute : "containerProps",type:"containerProps",description : "switch container class property",default : "''"},
    {attribute : "circleProps",type:"circleProps",description : "switch circle class property",default : "''"},
    {attribute : "ripple",type:"boolean",description : "Toggle ripple effect in switch",default : "true"},
  ];

}
