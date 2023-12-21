import { Component } from '@angular/core';
import { Property } from '../../../shared/model/property.model';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent {
  importCode: string = ` import { DUIRadio } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUIRadio],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;
  radioCode: string = ` 
  <dui-radio name="foo" value="1" color="gray"></dui-radio>
`;
  radioColor: string = ` 
  <dui-radio name="radio-name" label="Angular" value="1" color="red"></dui-radio>
  <dui-radio name="radio-name" label="React" value="2" color="blue"></dui-radio>
  <dui-radio name="radio-name" label="Vuejs" value="3" color="green"></dui-radio>`;

  radioDisabled: string = `
  <dui-radio name="radio-name" label="Angular" value="1" color="gray" [disabled]="true"></dui-radio>
  `;

  radioLabel: string = `
  <dui-radio name="radio-name" label="Angular" value="1" color="gray"></dui-radio>
  <dui-radio name="radio-name" label="React" value="2" color="gray"></dui-radio>
  <dui-radio name="radio-name" label="Vuejs" value="3" color="gray"></dui-radio>
`;
rippleRadio: string=`
  <dui-radio
  color="gray"
  name="radio-ripple-effect"
  label="Ripple Effect On"
  value="1"
  [ripple]="true">
  </dui-radio>

  <dui-radio
  color="gray"
  name="radio-ripple-effect"
  label="Ripple Effect Off"
  value="2"
  [ripple]="false"></dui-radio>
`;
customIconRadio: string=` <dui-radio
  color="gray"
  name="radio-custom-icon"
  label="Radio Custom Icon"
  value="2"
  [useCustomIcon]="true"
  >
  <dui-icon>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-3 w-3"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      />
    </svg>
  </dui-icon>
  </dui-radio>`;

  disabledRadio: string=`  <dui-radio name="radio-name" label="Angular" value="1" [disabled]="true" color="gray"></dui-radio>
  <dui-radio name="radio-name" label="React" value="2" [disabled]="true" color="gray"></dui-radio>
  <dui-radio name="radio-name" label="Vuejs" value="3" [disabled]="true" color="gray"></dui-radio>`;

  radioLink: string=`      
  <dui-radio color="gray"  name="radio-name-link" value="1"  >
    <dui-typography color="gray" variant="paragraph">
      I agree with the <a href="https://www.david-ui-angular.com/docs/radio" class="text-blue-500">terms and condition</a>
    </dui-typography>
  </dui-radio>`;

  radioDescription: string=`
  <dui-radio color="gray" label="Remember me" name="radio-name-description" value="1">
    <div>
      <dui-typography color="gray" variant="small" className="font-normal">
        You&apos;ll be able to login without password for 24 hours.
      </dui-typography>

    </div>
  </dui-radio>`;


  radioTypeColor: string = 
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


  radioProperties: Property[] = [
    {attribute : "label",type:"string",description : "radio label",default : "''"},
    {attribute : "color",type:"Color",description : "change radio color",default : "blue"},
    {attribute : "className",type:"string",description : "Add custom className for radio",default : "''"},
    {attribute : "size",type:"boolean",description : "Change radio size",default : "md"},
    {attribute : "disabled",type:"boolean",description : "Disable radio",default : "false"},
    {attribute : "containerClassName",type:"string",description : "radio container class property",default : "''"},
    {attribute : "ripple",type:"boolean",description : "Toggle ripple effect in radio",default : "true"},
    {attribute : "useCustomIcon",type:"boolean",description : "use custom icon in radio",default : "false"},

  ];
}
