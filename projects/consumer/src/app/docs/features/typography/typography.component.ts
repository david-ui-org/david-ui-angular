import { Component } from '@angular/core';

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
  textvalue: string = '';
}
