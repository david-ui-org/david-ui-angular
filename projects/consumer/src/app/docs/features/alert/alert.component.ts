import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  importCode: string = ` import { DUIAlert } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUIAlert],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;
  alert: string = `  <dui-alert [open]="true">
    A simple filled alert for showing message.
  </dui-alert>
  `;
  dismissAlert: string = 
` <dui-alert
    [open]="open"
    [IsDismissible]="true"
    (onAlertClosed)="alertClosed($event)">
    A simple filled alert for showing message.
 </dui-alert>`;
  open: boolean = false;

  toggleAlert() {
    this.open = !this.open;
  }
  alertClosed(status: boolean) {
    this.open = status;
  }
}
