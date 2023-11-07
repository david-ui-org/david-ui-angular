import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  importCode: string = ` import { DUICheckbox } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUICheckbox],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;
checkBoxCode: string=`  <!-- Use DUI Checkbox in html file -->
  <dui-checkbox color="gray" [isChecked]="true"></dui-checkbox>`;
checkboxColor: string=`  <!-- Use DUI Checkbox in html file -->
 <dui-checkbox color="gray" [isChecked]="true"></dui-checkbox>
 <dui-checkbox color="red" [isChecked]="true"></dui-checkbox>
 <dui-checkbox color="purple" [isChecked]="true"></dui-checkbox>`;
 checkboxLabel: string=`  <!-- Use DUI Checkbox in html file -->
 <dui-checkbox color="gray" label="Remember Me" [isChecked]="true"></dui-checkbox>`;
 disabledCheckbox: string=`  <!-- Use DUI Checkbox in html file -->
  <dui-checkbox color="gray" label="Remember Me" [isChecked]="true" [disabled]="true"></dui-checkbox>
  <dui-checkbox color="gray" label="Remember Me" [disabled]="true"></dui-checkbox>`;
}
