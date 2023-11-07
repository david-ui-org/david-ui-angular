import { Component } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent {
  importCode: string = ` import { DUIRadio } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUIRadio],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;
  radioCode: string = ` 
  <dui-radio name="foo" value="1" color="gray"></dui-radio>
`;
  radioColor: string = ` 
  <dui-radio name="radio-name" label="Angular" value="1" color="red"></dui-radio>
  <dui-radio name="radio-name" label="React" value="2" color="blue"></dui-radio>
  <dui-radio name="radio-name" label="Vuejs" value="3" color="green"></dui-radio>`;

  radioDisabled: string = `
  <dui-radio name="radio-name" label="Angular" value="1" color="gray" [disabled]="true"></dui-radio>
  `;

  radioLabel: string = `
  <dui-radio name="radio-name" label="Angular" value="1" color="gray"></dui-radio>
  <dui-radio name="radio-name" label="React" value="2" color="gray"></dui-radio>
  <dui-radio name="radio-name" label="Vuejs" value="3" color="gray"></dui-radio>
`;
}
