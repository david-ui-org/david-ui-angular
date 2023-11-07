import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { twMerge } from 'tailwind-merge';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import {
  DefaultCheckBox,
  className,
  color,
  icon,
  label,
} from '../../types/componentTypes/checkbox';
import { DUITheme } from '../../theme/theme-base';
import {
  ConvertToClassName,
  ObjectToStr,
} from '../../utilities/helpers/string-helper';
import { CheckBoxTheme } from '../../theme/components/checkbox/checkbox-theme';
import checkboxColors from '../../theme/components/checkbox/checkbox-colors';

@Component({
  selector: 'dui-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent
  extends DUITheme
  implements ControlValueAccessor, OnInit
{
  @Input() color!: color;
  @Input() className!: className;
  @Input() disabled!: boolean;
  @Input() ripple!: boolean;
  @Input() icon!: icon;
  @Input() label?: label;
  @Input() isChecked: boolean = false;

  onChange: any = () => {};
  onTouch: any = () => {};

  checkboxClass!: string;
  iconClass!: string;
  containerClass!: string;
  labelClass!: string;

  constructor() {
    super();
    this.color = this.color ?? DefaultCheckBox.color;
    this.className = this.className ?? DefaultCheckBox.className;
    this.disabled = this.disabled ?? DefaultCheckBox.disabled;
    this.label = this.label ?? DefaultCheckBox.label;
    this.ripple = this.ripple ?? DefaultCheckBox.ripple;
    this.icon = this.icon ?? DefaultCheckBox.icon;
  }
  writeValue(obj: any): void {
    this.isChecked = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  OnModelChange(value: boolean) {
    this.isChecked = value;
    this.onChange(value);
    this.onTouch(value);

  }

  override getCompiledClassName(): string {
    var classes = '';
    // add input class
    classes += ConvertToClassName(ObjectToStr(CheckBoxTheme['input']));
    // add the color classes
    classes += ConvertToClassName(ObjectToStr(checkboxColors[this.color]));

    // add disabled class if check box is disabled
    if (this.disabled) {
      classes += ConvertToClassName(ObjectToStr(CheckBoxTheme['disabled']));
    }

    if (this.className) {
      classes += ConvertToClassName(this.className);
    }

    return twMerge(ConvertToClassName(classes).split(' '));
  }
  ngOnInit(): void {
    this.checkboxClass = this.getCompiledClassName();
    this.iconClass = ConvertToClassName(ObjectToStr(CheckBoxTheme['icon']));
    this.containerClass = ConvertToClassName(
      ObjectToStr(CheckBoxTheme['container'])
    );
    this.labelClass = ConvertToClassName(ObjectToStr(CheckBoxTheme['label']));
  }
}
