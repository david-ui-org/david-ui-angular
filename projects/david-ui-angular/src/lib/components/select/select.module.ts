import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { OptionsComponent } from './options/options.component';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CdkDropdownComponent } from '../../shared/components/cdk-dropdown/cdk-dropdown.component';
import { DropdownForDirective } from '../../shared/directive/dropdown-for.directive';





@NgModule({
  declarations: [
    SelectComponent,
    OptionsComponent,
    CdkDropdownComponent,
    DropdownForDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    PortalModule,
    OverlayModule
  ],
  exports: [
    SelectComponent,
    OptionsComponent
  ]
})
export class DUISelect { }
