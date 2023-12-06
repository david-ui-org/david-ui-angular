import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

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
}
