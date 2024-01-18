import { Component } from '@angular/core';
import { Property } from '../../../shared/model/property.model';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent {
  importCode: string = ` import { DUITextarea } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUITextarea],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;
  inputCode: string = `  
  <dui-input label="Message"></dui-input>
  `;

  inputDisabledCode: string = `
  <dui-textarea [disabled]="true" label="Message"></dui-textarea>
  `;

  inputVariantCode: string = `  
    <dui-textarea variant="outlined" label="Message"></dui-textarea>
    <dui-textarea variant="static" label="Message"></dui-textarea>
    <dui-textarea variant="standard" label="Message"></dui-textarea>
  `;

  inputSizeCode: string = `  
  <dui-textarea size="md" label="Textarea Medium" ></dui-textarea>
  <dui-textarea size="lg" label="Textarea Large" ></dui-textarea>
  `;
  inputColorCode = `
  <dui-textarea color="gray" label="Gray Message"></dui-textarea>
  <dui-textarea color="green" label="Green Message"></dui-textarea>
  <dui-textarea color="red" label="Red Message"></dui-textarea>`;
  textvalue: string = '';



  textareaTypeVariant: string = ` 
  type variant = "standard" | "outlined" | "static"`;
  textareaTypeSize: string = ` 
  type size = 'md' | 'lg';`;
  textareaTypeColor: string = 
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


  textareaProperties: Property[] = [
    {attribute : "variant",type:"Variant",description : "change textarea variant",default : "filled"},
    {attribute : "color",type:"Color",description : "change textarea color",default : "gray"},
    {attribute : "className",type:"string",description : "Add custom className for textarea",default : "''"},
    {attribute : "size",type:"boolean",description : "Change textarea size",default : "md"},
    {attribute : "label",type:"string",description : "Label for textarea",default : "Enter your text"},
    {attribute : "name",type:"string",description : "Name prop for textarea",default : "''"},
    {attribute : "type",type:"string",description : "Type prop for textarea",default : "text"},
    {attribute : "cols",type:"string",description : "Columns in textarea",default : "text"},
    {attribute : "rows",type:"string",description : "Rows in textarea",default : "text"},
    {attribute : "error",type:"boolean",description : "Change textarea state to error",default : "false"},
    {attribute : "success",type:"boolean",description : "Change textarea state to success",default : "false"},
    {attribute : "disabled",type:"boolean",description : "Disable textarea",default : "false"},
    {attribute : "required",type:"boolean",description : "Make textarea as required",default : "false"},
    {attribute : "readonly",type:"boolean",description : "Make textarea readonly",default : "false"},

  ];
}
