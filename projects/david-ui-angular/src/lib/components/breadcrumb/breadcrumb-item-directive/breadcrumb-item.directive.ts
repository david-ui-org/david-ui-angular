import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[breadcrumb-Item]'
})
export class BreadcrumbItemDirective {

  hidden: boolean = false;
  constructor(public templateRef: TemplateRef<any>) { }

}
