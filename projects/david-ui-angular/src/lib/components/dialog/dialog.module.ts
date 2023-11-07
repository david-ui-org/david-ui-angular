import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { DialogHeaderComponent } from './dialog-header/dialog-header.component';
import { DialogFooterComponent } from './dialog-footer/dialog-footer.component';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';



@NgModule({
  declarations: [
    DialogComponent,
    DialogHeaderComponent,
    DialogFooterComponent,
    DialogBodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DialogComponent,
    DialogHeaderComponent,
    DialogFooterComponent,
    DialogBodyComponent
  ]
})
export class DUIDialog { }
