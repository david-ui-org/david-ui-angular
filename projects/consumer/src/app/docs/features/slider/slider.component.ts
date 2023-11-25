import { Component } from '@angular/core';

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
}
