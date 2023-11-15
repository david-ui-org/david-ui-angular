import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  DefaultAlert,
  className,
  color,
  variant,
} from '../../types/componentTypes/alert';
import { DUIIcon } from '../../shared/components/dui-icon/dui-icon.component';
import { DUITheme } from '../../theme/theme-base';
import { ConvertToClassName, ObjectToStr } from '../../utilities/helpers/string-helper';
import { twMerge } from 'tailwind-merge';
import { AlertTheme } from '../../theme/components/alert/alert-theme';
import { IPropsMapper } from '../../types/generic';

@Component({
  selector: 'dui-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent extends DUITheme implements OnInit, AfterContentInit {

  @Input() variant!: variant;
  @Input() color!: color;
  @Input() className!: className;
  @Input() open!: boolean;
  @Input() IsDismissible!: boolean;

  @Output() onAlertClosed: EventEmitter<boolean> = new EventEmitter();

  @ContentChild(DUIIcon) icon!: DUIIcon;

  hasCustomIcon: boolean = false;
  alertClass: string = "";

  constructor() {
    super();
    this.variant = this.variant ?? DefaultAlert.variant;
    this.className = this.className ?? DefaultAlert.className;
    this.color = this.color ?? DefaultAlert.color;
    this.open = this.open ?? DefaultAlert.open;
    this.IsDismissible = this.IsDismissible ?? DefaultAlert.isDismissible;
  }
  override getCompiledClassName(): string {
    var classes:string = '';
    // get alert class
    classes += ConvertToClassName(ObjectToStr(AlertTheme['alert']))
    //get alert variant
    let alertVariant = (AlertTheme['variants'] as IPropsMapper<object>)[this.variant] as IPropsMapper<object> ;
    classes += ConvertToClassName(ObjectToStr(alertVariant[this.color]));

    if (this.className) {
      classes += ConvertToClassName(this.className);
    }


    return twMerge(ConvertToClassName(classes).split(" "));
  }
  ngOnInit(): void {
    this.alertClass = this.getCompiledClassName();
  }

  ngAfterContentInit(): void {
    if (this.icon) {
      this.hasCustomIcon = true;
    }
  }

  closeAlert() {
    this.open = false;
    this.onAlertClosed.emit(false);
  }
}
