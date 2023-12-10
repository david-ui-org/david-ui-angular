import { Component } from '@angular/core';
import { Property } from '../../../shared/model/property.model';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent {
  importCode: string = ` import { DUITypography } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUITypography],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;
  inputCode: string = `  
  <dui-typography variant="h1">David UI Angular</dui-typography>
  <dui-typography variant="h2">David UI Angular</dui-typography>
  <dui-typography variant="h3">David UI Angular</dui-typography>
  <dui-typography variant="h4">David UI Angular</dui-typography>
  <dui-typography variant="h5">David UI Angular</dui-typography>
  <dui-typography variant="h6">David UI Angular</dui-typography>
  <dui-typography variant="lead">
    David UI Angular is an easy to use components library for Tailwind CSS
    and Angular. It provides a simple way to customize your
    components, you can change the colors, fonts, breakpoints and everything
    you need.
  </dui-typography>
  <dui-typography variant="paragraph">
    David UI Angular is an easy to use components library for Tailwind CSS
    and Angular. It provides a simple way to customize your
    components, you can change the colors, fonts, breakpoints and everything
    you need.
  </dui-typography>
  <dui-typography variant="small">
    David UI Angular is an easy to use components library for Tailwind CSS
    and Angular. It provides a simple way to customize your
    components, you can change the colors, fonts, breakpoints and everything
    you need.
  </dui-typography>
  `;
  inputColorCode = `
  <dui-typography variant="h1" color="black">David UI Angular</dui-typography>  
  <dui-typography variant="h2" color="red">David UI Angular</dui-typography>
  <dui-typography variant="h3" color="yellow">David UI Angular</dui-typography>
  <dui-typography variant="h4" color="green">David UI Angular</dui-typography>`;

  inputGradientCode = `
  <div>
    <dui-typography color="blue" variant="h1" [textGradient]="true">
    David UI Angular
    </dui-typography>
  </div>
  `;
  textvalue: string = '';



  typographyTypeVariant: string = ` 
  type variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'lead' | 'paragraph' | 'small'`;

  typographyTypeColor: string = 
  ` type colors = 'inherit' | 'current' | 'black' | 'white'
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


  typographyProperties: Property[] = [
    {attribute : "variant",type:"Variant",description : "change typography variant",default : "paragraph"},
    {attribute : "color",type:"Color",description : "change typography color",default : "inherit"},
    {attribute : "className",type:"string",description : "Add custom className for typography",default : "''"},
    {attribute : "textGradient",type:"boolean",description : "Change typography size",default : "false"},
 

  ];
}
