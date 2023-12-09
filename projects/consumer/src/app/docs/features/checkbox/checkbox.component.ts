import { Component } from '@angular/core';
import { Property } from '../../../shared/model/property.model';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  importCode: string = ` import { DUICheckbox } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUICheckbox],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;
checkBoxCode: string=`  <!-- Use DUI Checkbox in html file -->
  <dui-checkbox color="gray" [isChecked]="true"></dui-checkbox>`;
checkboxColor: string=`  <!-- Use DUI Checkbox in html file -->
 <dui-checkbox color="gray" [isChecked]="true"></dui-checkbox>
 <dui-checkbox color="red" [isChecked]="true"></dui-checkbox>
 <dui-checkbox color="purple" [isChecked]="true"></dui-checkbox>`;
 checkboxLabel: string=`  <!-- Use DUI Checkbox in html file -->
 <dui-checkbox color="gray" label="Remember Me" [isChecked]="true"></dui-checkbox>`;
 disabledCheckbox: string=`  <!-- Use DUI Checkbox in html file -->
  <dui-checkbox color="gray" label="Remember Me" [isChecked]="true" [disabled]="true"></dui-checkbox>
  <dui-checkbox color="gray" label="Remember Me" [disabled]="true"></dui-checkbox>`;
  checkBoxLink: string=`  <!-- Use DUI Checkbox in html file -->
  <dui-checkbox color="gray">
        <dui-typography color="gray" variant="paragraph">
          I agree with the <a href="https://www.david-ui-angular.com/docs/checkbox" class="text-blue-500">terms and condition</a>
        </dui-typography>
  </dui-checkbox>`;
  checkBoxDescription: string=`  <!-- Use DUI Checkbox in html file -->
  <dui-checkbox color="gray" label="Remember me">
    <div>
      <dui-typography color="gray" variant="small" className="font-normal">
        You&apos;ll be able to login without password for 24 hours.
      </dui-typography>
    </div>
  </dui-checkbox>`;
  rippleCheckbox: string=`  <!-- Use DUI Checkbox in html file -->
  <dui-checkbox color="gray" label="Ripple Effect On" [isChecked]="true" [ripple]="true"></dui-checkbox>
  <dui-checkbox color="gray" label="Ripple Effect Off" [isChecked]="true" [ripple]="false"></dui-checkbox>`;
  customIconCheckbox: string=`  <!-- Use DUI Checkbox in html file -->
  <dui-checkbox color="gray" label="Favourite" [isChecked]="true" [useCustomIcon]="true">
  <dui-icon>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-3 w-3"
    viewBox="0 0 20 20"
    fill="currentColor">
    <path
      fillRule="evenodd"
      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
      clipRule="evenodd"
    />
  </svg>
  </dui-icon>
  </dui-checkbox>`;



  checkboxTypeColor: string = 
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


  checkboxProperties: Property[] = [
    {attribute : "label",type:"string",description : "Checkbox label",default : ""},
    {attribute : "color",type:"Color",description : "change checkbox color",default : "blue"},
    {attribute : "className",type:"string",description : "Add custom className for checkbox expansion",default : ""},
    {attribute : "size",type:"boolean",description : "Change checkbox size",default : "md"},
    {attribute : "disabled",type:"boolean",description : "Disable checkbox",default : "false"},
    {attribute : "containerClassName",type:"string",description : "Checkbox container class property",default : ""},
    {attribute : "ripple",type:"boolean",description : "Toggle ripple effect in checkbox",default : "true"},
    {attribute : "useCustomIcon",type:"boolean",description : "use custome icon in checkbox",default : "false"},

  ];
}
