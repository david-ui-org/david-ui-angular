import { Component } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
  importCode: string = ` import { DUIChip } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUIChip],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;

  chipCode : string =
  `
  <dui-chip>Chip</dui-chip>
  `;

  chipVariantCode : string =
  `
  <dui-chip>Chip</dui-chip>
  `;

  chipColorCode : string =
  `
  <dui-chip color="red">Chip</dui-chip>
  <dui-chip color="yellow">Chip</dui-chip>
  <dui-chip color="green">Chip</dui-chip>
  `;

}
