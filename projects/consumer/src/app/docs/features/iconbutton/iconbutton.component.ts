import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-iconbutton',
  templateUrl: './iconbutton.component.html',
  styleUrls: ['./iconbutton.component.scss']
})
export class IconbuttonComponent {

  coffeIcon = faHeart;

  public importCode = ` import { DUIIconButton } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUIIconButton],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;
  buttonCode = ` <!-- Use DUI Button in html file -->
  <dui-icon-button color="gray">
    <fa-icon [icon]="coffeIcon"></fa-icon>
  </dui-icon-button>  `;


}
