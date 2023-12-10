import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Property } from '../../../shared/model/property.model';

@Component({
  selector: 'app-iconbutton',
  templateUrl: './iconbutton.component.html',
  styleUrls: ['./iconbutton.component.scss'],
})
export class IconbuttonComponent {
  heartIcon = faHeart;

  public importCode = ` import { DUIIconButton } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUIIconButton],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;
  buttonCode = ` 
  import { faHeart } from '@fortawesome/free-solid-svg-icons';
  heartIcon = faHeart;

  <!-- Use DUI Button in html file -->
  <dui-icon-button color="gray">
    <fa-icon [icon]="heartIcon"></fa-icon>
  </dui-icon-button>  `;
  outlinedButton = `
  import { faHeart } from '@fortawesome/free-solid-svg-icons';
  heartIcon = faHeart;
  <!-- Use DUI Button in html file -->
    <dui-icon-button size="md" variant="filled" color="gray">
    <fa-icon [icon]="heartIcon"></fa-icon>
  </dui-icon-button>
  <dui-icon-button size="md" variant="outlined" color="gray">
    <fa-icon [icon]="heartIcon"></fa-icon>
  </dui-icon-button>
  <dui-icon-button size="md" variant="text" color="gray">
    <fa-icon [icon]="heartIcon"></fa-icon>
  </dui-icon-button>
  <dui-icon-button size="md" variant="gradient" color="gray">
    <fa-icon [icon]="heartIcon"></fa-icon>
  </dui-icon-button>
  `;

  buttonSizeCode = ` 
  import { faHeart } from '@fortawesome/free-solid-svg-icons';
  heartIcon = faHeart;

  <!-- Use DUI Button in html file -->
  <dui-icon-button size="sm" color="gray">
    <fa-icon [icon]="heartIcon"></fa-icon>
  </dui-icon-button>
  <dui-icon-button size="md"  color="gray">
    <fa-icon [icon]="heartIcon"></fa-icon>
  </dui-icon-button>
  <dui-icon-button size="lg"  color="gray">
    <fa-icon [icon]="heartIcon"></fa-icon>
  </dui-icon-button>
  `;
  buttonColorCode = `
  <div class="flex items-center gap-4">
    <dui-icon-button  color="gray">
      <fa-icon [icon]="heartIcon"></fa-icon>
    </dui-icon-button>
    <dui-icon-button   color="blue">
      <fa-icon [icon]="heartIcon"></fa-icon>
    </dui-icon-button>
    <dui-icon-button   color="red">
      <fa-icon [icon]="heartIcon"></fa-icon>
    </dui-icon-button>
    <dui-icon-button   color="yellow">
      <fa-icon [icon]="heartIcon"></fa-icon>
    </dui-icon-button>
    <dui-icon-button   color="green">
      <fa-icon [icon]="heartIcon"></fa-icon>
    </dui-icon-button>

  </div>
  `;
  roundedButtons: string = `
  <div class="flex items-center gap-4">
    <dui-icon-button [rounded]="true" color="gray" variant="filled" >
      <fa-icon [icon]="heartIcon"></fa-icon>
    </dui-icon-button>
    <dui-icon-button [rounded]="true" color="gray" variant="outlined" >
      <fa-icon [icon]="heartIcon"></fa-icon>
    </dui-icon-button>
    <dui-icon-button [rounded]="true" color="gray" variant="text" >
      <fa-icon [icon]="heartIcon"></fa-icon>
    </dui-icon-button>
    <dui-icon-button [rounded]="true" color="gray" variant="gradient" >
      <fa-icon [icon]="heartIcon"></fa-icon>
    </dui-icon-button>

  </div>
  `;

  rippleEffectButton: string = ` 
  <dui-icon-button [ripple]="true" color="gray" variant="filled" >
    <fa-icon [icon]="heartIcon"></fa-icon>
  </dui-icon-button>
  <dui-icon-button [ripple]="false" color="gray" variant="filled" >
    <fa-icon [icon]="heartIcon"></fa-icon>
  </dui-icon-button>
  `;


  iconbuttonTypeVariant: string = ` 
  type variant = 'filled' | 'outlined' | 'gradient' | 'text';`;
  iconbuttonTypeSize: string = ` 
  type size = 'sm' | 'md' | 'lg';`;
  iconbuttonTypeColor: string = 
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


  iconbuttonProperties: Property[] = [
    {attribute : "variant",type:"Variant",description : "change button variant",default : "filled"},
    {attribute : "color",type:"Color",description : "change button color",default : "gray"},
    {attribute : "className",type:"string",description : "Add custom className for button",default : ""},
    {attribute : "size",type:"boolean",description : "Change button size",default : "md"},
    {attribute : "fullWidth",type:"boolean",description : "Block level button",default : "false"},
    {attribute : "rounded",type:"boolean",description : "Rounded button",default : "false"},
    {attribute : "ripple",type:"boolean",description : "Toggle ripple effect in button",default : "true"},

  ];
}
