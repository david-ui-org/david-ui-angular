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
  dismissAlert: string = ` <dui-alert
    [open]="open"
    [IsDismissible]="true"
    (onAlertClosed)="alertClosed($event)">
    A simple filled alert for showing message.
 </dui-alert>`;

  alertWithIcon: string = `<dui-alert
 [open]="open"
 [IsDismissible]="true"
 (onAlertClosed)="alertClosed($event)">
 <dui-icon>
   <svg
     xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
     strokeWidth="{2}"
     stroke="currentColor"
     className="h-6 w-6"
   >
     <path
       strokeLinecap="round"
       strokeLinejoin="round"
       d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
     /></svg>
     </dui-icon> A simple filled alert for showing message.
  </dui-alert>`;
  open: boolean = false;
  alertVariants: string = `
  <div class="w-full flex flex-col gap-3">
    <dui-alert
    [open]="true"
    variant="outlined">
     A simple outlined alert for showing message.
  </dui-alert>
  <dui-alert
    [open]="true"
    variant="filled" 
  > A simple filled alert for showing message.
  </dui-alert>
  <dui-alert
    [open]="true"
    variant="ghost"
  > A simple ghost alert for showing message.
  </dui-alert>
  <dui-alert
    [open]="true"
    variant="gradient"
  > A simple gradient alert for showing message.
  </dui-alert>
  </div>
  `;

  alertColors: string = `
  <dui-alert color="blue">
    A simple filled alert for showing message.</dui-alert>
  <dui-alert color="red">
    A simple filled alert for showing message.</dui-alert>
  <dui-alert color="yellow">
    A simple filled alert for showing message.</dui-alert>
  <dui-alert color="green" >
    A simple filled alert for showing message.</dui-alert>
  `;

  toggleAlert() {
    this.open = !this.open;
  }
  alertClosed(status: boolean) {
    this.open = status;
  }
}
