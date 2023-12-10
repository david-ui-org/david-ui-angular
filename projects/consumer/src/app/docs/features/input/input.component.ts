import { Component } from '@angular/core';
import { Property } from '../../../shared/model/property.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  importCode: string = ` import { DUIInput } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUIInput],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;
  inputVariantCode: string = `  
  <dui-input label="Username"></dui-input>
  <dui-input variant="standard" label="Username"></dui-input>
  <dui-input variant="static" label="Username"></dui-input>
  `;
  inputCode: string = `  
  <dui-input label="Username"></dui-input>
  `;
  inputSizeCode: string = `  
  <dui-input size="md" label="Outlined Medium"></dui-input>
  <dui-input size="lg" label="Outlined Large"></dui-input>
  `;
  inputColorCode =`
  <dui-input color="purple" label="Username"></dui-input>
  <dui-input color="yellow" label="Username"></dui-input>
  <dui-input color="green" label="Username"></dui-input>`;



  inputTypeVariant: string = ` 
  type variant = "standard" | "outlined" | "static"`;
  inputTypeSize: string = ` 
  type size = 'md' | 'lg';`;
  inputTypeColor: string = 
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


  inputProperties: Property[] = [
    {attribute : "variant",type:"Variant",description : "change input variant",default : "filled"},
    {attribute : "color",type:"Color",description : "change input color",default : "gray"},
    {attribute : "className",type:"string",description : "Add custom className for input",default : "''"},
    {attribute : "size",type:"boolean",description : "Change input size",default : "md"},
    {attribute : "label",type:"string",description : "Label for input",default : "Enter your text"},
    {attribute : "name",type:"string",description : "Name prop for input",default : "''"},
    {attribute : "type",type:"string",description : "Type prop for input",default : "text"},
    {attribute : "error",type:"boolean",description : "Change input state to error",default : "false"},
    {attribute : "success",type:"boolean",description : "Change input state to success",default : "false"},
    {attribute : "disabled",type:"boolean",description : "Disable input",default : "false"},
    {attribute : "required",type:"boolean",description : "Make input as required",default : "false"},
    {attribute : "readonly",type:"boolean",description : "Make input readonly",default : "false"},

  ];

}
