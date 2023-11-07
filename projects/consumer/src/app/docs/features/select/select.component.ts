import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  importCode: string = ` import { DUISelect } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUISelect],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;
  selectCode: string = `  
  <div class="w-80">
    <dui-select [optionsList]="options">
      <dui-options *ngFor="let option of options" [value]="option">{{
        option
      }}</dui-options>
    </dui-select>
  </div>
  `;
  options: string[] = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
  ];

  // inputColorCode =`
  // <dui-input color="purple" label="Username"></dui-input>
  // <dui-input color="yellow" label="Username"></dui-input>
  // <dui-input color="green" label="Username"></dui-input>`;
}
