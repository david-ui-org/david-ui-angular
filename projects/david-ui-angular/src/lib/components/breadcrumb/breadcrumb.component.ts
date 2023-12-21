import { AfterContentInit, Component, ContentChildren, ElementRef, Input, OnInit, QueryList } from '@angular/core';
import { DUITheme } from '../../theme/theme-base';
import { DefaultBreadCrumb, className, fullWidth } from '../../types/componentTypes/breadcrumb';
import { twMerge } from 'tailwind-merge';
import { ConvertToClassName, ObjectToStr } from '../../utilities/helpers/string-helper';
import { BreadCrumbTheme } from '../../theme/components/breadcrumb/breadcrumb-theme';
import { IPropsMapper } from '../../types/generic';
import { BreadcrumbItemDirective } from './breadcrumb-item-directive/breadcrumb-item.directive';

@Component({
  selector: 'dui-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent extends DUITheme implements OnInit, AfterContentInit {
  @Input() className!: className;
  @Input() fullWidth!: fullWidth;

  @ContentChildren(BreadcrumbItemDirective) breadCrumbItems! : QueryList<BreadcrumbItemDirective>;

  rootClass : string = '';
  listClass : string = '';
  listItemClass : string = '';
  separatorClass : string = '';

  constructor(){
    super();
    this.className = this.className ??  DefaultBreadCrumb.className;
    this.fullWidth = this.fullWidth ??  DefaultBreadCrumb.fullWidth;
  }
 
  override getCompiledClassName(): string {
    var classes = '';
    var itemStyle = BreadCrumbTheme['item'] as IPropsMapper<object>
    classes += ConvertToClassName(ObjectToStr(itemStyle['initial']))

    if (this.className) {
      classes += ConvertToClassName(this.className)

    }

    return twMerge(ConvertToClassName(classes).split(' '))
  }
   getCompiledRootClassName(): string {
    var classes = '';

    classes += ConvertToClassName(ObjectToStr(BreadCrumbTheme['initial']))

    if (this.fullWidth) {
      classes += ConvertToClassName(ObjectToStr(BreadCrumbTheme['fullWidth']))

    }

    return ConvertToClassName(classes)
  }
  ngOnInit(): void {
    this.rootClass = this.getCompiledRootClassName();
    this.listItemClass = this.getCompiledClassName();
    this.listClass = ConvertToClassName(ObjectToStr(BreadCrumbTheme['list']))
    this.separatorClass = ConvertToClassName(ObjectToStr(BreadCrumbTheme['separator']))
  }

  ngAfterContentInit(): void {
    console.log("Bread-items",this.breadCrumbItems.length)
  }

}
