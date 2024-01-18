import { Component } from '@angular/core';
import { Property } from '../../../shared/model/property.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  importCode: string = ` import { DUISlider } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUISlider],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;

  sliderCode: string = `
  <div class="w-96">
    <dui-slider defaultValue="50"></dui-slider>
  </div>
  `;

  sliderSizeCode: string = `
  <div class="flex w-96 flex-col gap-8Í">
    <dui-slider size="sm" defaultValue="50"></dui-slider>
    <dui-slider size="md" defaultValue="50"></dui-slider>
    <dui-slider size="lg" defaultValue="50"></dui-slider>
  </div>
  `;

  sliderColorCode: string = `
  <div class="flex w-96 flex-col gap-8">
    <dui-slider color="blue" defaultValue="50"></dui-slider>
    <dui-slider color="red" defaultValue="50"></dui-slider>
    <dui-slider color="green" defaultValue="50"></dui-slider>
    <dui-slider color="yellow" defaultValue="50"></dui-slider>
  </div>
  `;

  sliderTypeSize: string = ` 
  type size = 'md' | 'lg';`;
  sliderTypeColor: string = 
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


  sliderProperties: Property[] = [
    {attribute : "color",type:"Color",description : "change slider color",default : "gray"},
    {attribute : "className",type:"string",description : "Add custom className for slider",default : "''"},
    {attribute : "trackClassName",type:"string",description : "Add custom className for slider",default : "''"},
    {attribute : "thumbClassName",type:"string",description : "Add custom className for slider",default : "''"},
    {attribute : "barClassName",type:"string",description : "Add custom className for slider",default : "''"},
    {attribute : "size",type:"boolean",description : "Change slider size",default : "md"},
    {attribute : "defaultValue",type:"string | number",description : "Default Value for slider",default : "required"},
    {attribute : "value",type:"string",description : "Value prop for slider",default : "''"},
    {attribute : "min",type:"string",description : "Min value prop for slider",default : "text"},
    {attribute : "max",type:"boolean",description : "Max value slider",default : "false"},
    {attribute : "step",type:"boolean",description : "Steps for slider ",default : "false"},


  ];
}
