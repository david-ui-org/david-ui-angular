import { Component } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent {
  importCode: string = ` import { DUITextarea } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUITextarea],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;
  inputCode: string = `  
  <dui-input label="Message"></dui-input>
  `;

  inputDisabledCode: string = `
  <dui-textarea [disabled]="true" label="Message"></dui-textarea>
  `;

  inputVariantCode: string = `  
    <dui-textarea variant="outlined" label="Message"></dui-textarea>
    <dui-textarea variant="static" label="Message"></dui-textarea>
    <dui-textarea variant="standard" label="Message"></dui-textarea>
  `;

  inputSizeCode: string = `  
  <dui-textarea size="md" label="Textarea Medium" ></dui-textarea>
  <dui-textarea size="lg" label="Textarea Large" ></dui-textarea>
  `;
  inputColorCode = `
  <dui-textarea color="gray" label="Gray Message"></dui-textarea>
  <dui-textarea color="green" label="Green Message"></dui-textarea>
  <dui-textarea color="red" label="Red Message"></dui-textarea>`;
  textvalue: string = '';
}
