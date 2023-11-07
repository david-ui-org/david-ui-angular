import { Component } from '@angular/core';

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

}
