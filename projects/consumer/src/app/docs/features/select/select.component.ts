import { Component } from '@angular/core';
import { Property } from '../../../shared/model/property.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  importCode: string = ` import { DUISelect } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUISelect],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;
  selectCode: string = `  
  <div class="w-80">
    <dui-select [optionsList]="options">
      <dui-options *ngFor="let option of options" [value]="option">{{
        option
      }}</dui-options>
    </dui-select>
  </div>
  `;

  selectSizeCode: string = `  
  <div class="flex w-80 flex-col gap-8">
    <dui-select
      label="Select a Version"
      size="md"
      [optionsList]="optionsStandard"
    >
      <dui-options
        *ngFor="let option of optionsStandard"
        [value]="option"
        >{{ option }}</dui-options
      >
    </dui-select>

    <dui-select
      label="Select a Version"
      size="lg"
      [optionsList]="optionsStandard"
    >
      <dui-options
        *ngFor="let option of optionsStandard"
        [value]="option"
        >{{ option }}</dui-options
      >
    </dui-select>
  </div>
  `;

  selectVariantCode: string = `  
  <div class="flex w-80 flex-col gap-8">
        <dui-select
          label="Select a Version"
          variant="standard"
          [optionsList]="optionsStandard"
        >
          <dui-options
            *ngFor="let option of optionsStandard"
            [value]="option"
            >{{ option }}</dui-options
          >
        </dui-select>

        <dui-select
          variant="outlined"
          label="Select a Version"
          [optionsList]="optionsStandard"
        >
          <dui-options
            *ngFor="let option of optionsStandard"
            [value]="option"
            >{{ option }}</dui-options
          >
        </dui-select>
        <dui-select
          label="Select a Version"
          variant="static"
          [optionsList]="optionsStandard"
        >
          <dui-options
            *ngFor="let option of optionsStandard"
            [value]="option"
            >{{ option }}</dui-options
          >
        </dui-select>
      </div>
  `;

  selectColorCode: string = `  
  <div class="flex w-80 flex-col gap-8">
    <dui-select
      label="Select a Version"
      color="blue"
      [optionsList]="optionsStandard"
    >
      <dui-options
        *ngFor="let option of optionsStandard"
        [value]="option"
        >{{ option }}</dui-options
      >
    </dui-select>

    <dui-select
      label="Select a Version"
      color="purple"
      [optionsList]="optionsStandard"
    >
      <dui-options
        *ngFor="let option of optionsStandard"
        [value]="option"
        >{{ option }}</dui-options
      >
    </dui-select>
    <dui-select
      label="Select a Version"
      color="green"
      [optionsList]="optionsStandard"
    >
      <dui-options
        *ngFor="let option of optionsStandard"
        [value]="option"
        >{{ option }}</dui-options
      >
    </dui-select>
  </div>
  `;

  selectDisabledCode: string = `  
  <div class="flex w-80 flex-col gap-8">
    <dui-select
      label="Select a Version"
      color="blue"
      [disabled]="true"
      [optionsList]="optionsStandard"
    >
      <dui-options
        *ngFor="let option of optionsStandard"
        [value]="option"
        >{{ option }}</dui-options
      >
    </dui-select>


  </div>
  `;
  options: string[] = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
  ];

  optionsStandard: string[] = ['HTML', 'REACT', 'ANGULAR', 'VUE', 'NEXT'];

  selectTypeVariant: string = ` 
  type variant = "standard" | "outlined" | "static"`;
  selectTypeSize: string = ` 
  type size = 'md' | 'lg';`;
  selectTypeColor: string = 
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


  selectProperties: Property[] = [
    {attribute : "variant",type:"Variant",description : "change select variant",default : "filled"},
    {attribute : "color",type:"Color",description : "change select color",default : "gray"},
    {attribute : "className",type:"string",description : "Add custom className for select",default : "''"},
    {attribute : "size",type:"boolean",description : "Change select size",default : "md"},
    {attribute : "label",type:"string",description : "Label for select",default : "Enter your text"},
    {attribute : "name",type:"string",description : "Name prop for select",default : "''"},
    {attribute : "type",type:"string",description : "Type prop for select",default : "text"},
    {attribute : "error",type:"boolean",description : "Change select state to error",default : "false"},
    {attribute : "success",type:"boolean",description : "Change select state to success",default : "false"},
    {attribute : "disabled",type:"boolean",description : "Disable select",default : "false"},
    {attribute : "required",type:"boolean",description : "Make select as required",default : "false"},
    {attribute : "readonly",type:"boolean",description : "Make select readonly",default : "false"},
    {attribute : "autoHeight",type:"boolean",description : "Make select readonly",default : "undefined"},
    {attribute : "lockScroll",type:"boolean",description : "Make select readonly",default : "undefined"},

  ];

  optionProperties: Property[] = [

    {attribute : "value",type:"string",description : "Value for select",default : "undefined"},
    {attribute : "key",type:"string",description : "Key prop for select",default : "undefined"},
    {attribute : "disabled",type:"boolean",description : "Disable select",default : "false"},


  ];

  // inputColorCode =`
  // <dui-input color="purple" label="Username"></dui-input>
  // <dui-input color="yellow" label="Username"></dui-input>
  // <dui-input color="green" label="Username"></dui-input>`;
}
