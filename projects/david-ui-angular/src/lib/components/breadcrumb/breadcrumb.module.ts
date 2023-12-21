import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbItemDirective } from './breadcrumb-item-directive/breadcrumb-item.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BreadcrumbComponent,
    BreadcrumbItemDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    BreadcrumbComponent,
    BreadcrumbItemDirective
  ]
})
export class DUIBreadCrumb { }
