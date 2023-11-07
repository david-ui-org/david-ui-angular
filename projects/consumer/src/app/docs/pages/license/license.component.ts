import { Component } from '@angular/core';

@Component({
  selector: 'doc-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss']
})
export class LicenseComponent {
  currentYear : number = new Date().getFullYear();
}
