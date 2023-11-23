import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
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

  sliderCode : string = `
  <dui-slider></dui-slider>
  `

}
