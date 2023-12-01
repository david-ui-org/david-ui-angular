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

  selectVariantCode: string = `  
  <div class="flex w-80 flex-col gap-8">
    <dui-select
      variant="standard"
      [required]="true"
      [optionsList]="optionsStandard"
    >
      <dui-options
        *ngFor="let option of optionsStandard"
        [value]="option"
        >{{ option }}</dui-options
      >
    </dui-select>

    <dui-select variant="outlined" [optionsList]="optionsStandard">
      <dui-options
        *ngFor="let option of optionsStandard"
        [value]="option"
        >{{ option }}</dui-options
      >
    </dui-select>
    <dui-select variant="static" [optionsList]="optionsStandard">
      <dui-options
        *ngFor="let option of optionsStandard"
        [value]="option"
        >{{ option }}</dui-options
      >
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

  optionsStandard: string[] = [
    'Option Standard 1',
    'Option Standard 2',
    'Option Standard 3',
    'Option Standard 4',
    'Option Standard 5',
    'Option Standard 6',
  ];

  // inputColorCode =`
  // <dui-input color="purple" label="Username"></dui-input>
  // <dui-input color="yellow" label="Username"></dui-input>
  // <dui-input color="green" label="Username"></dui-input>`;
}
