import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  importCode: string = ` import { DUIDialog } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUIDialog],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;
  dialogCode: string = ` 
  <dui-dialog [open]="openDialog">
  <dui-dialog-header>
    <dui-typography variant="h2">What is David UI Angular?</dui-typography>
  </dui-dialog-header>
  <dui-dialog-body>
    <dui-typography variant="paragraph"
      >David UI Angular is an easy to use components library for Tailwind CSS
      and Angular. It provides a simple way to customize your
      components, you can change the colors, fonts, breakpoints and everything
      you need.
      </dui-typography>
    </dui-dialog-body>

  <dui-dialog-footer>
    <dui-button [rounded]="true" variant="text"  color="gray" (click)="OpenDialog()"
      >Close</dui-button>
  </dui-dialog-footer>
  </dui-dialog>`;

  openDialog: boolean = false;
  OpenDialog() {
    this.openDialog = !this.openDialog;
  }
}
