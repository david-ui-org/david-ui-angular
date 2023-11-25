import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  ConvertToClassName,
  ObjectToStr,
} from '../../utilities/helpers/string-helper';
import { twMerge } from 'tailwind-merge';
import { DUITheme } from '../../theme/theme-base';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  DefaultCheckBox,
  circleProps,
  className,
  color,
  containerProps,
  label,
} from '../../types/componentTypes/checkbox';
import { SwitchTheme } from '../../theme/components/switch/switch-theme';
import switchColors from '../../theme/components/switch/switch-colors';
import { IPropsMapper } from '../../types/generic';

@Component({
  selector: 'dui-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DUISwitchComponent),
      multi: true,
    },
  ],
})
export class DUISwitchComponent
  extends DUITheme
  implements ControlValueAccessor, OnInit
{
  @Input() color!: color;
  @Input() className!: className;
  @Input() containerProps!: containerProps;
  @Input() circleProps!: circleProps;
  @Input() disabled!: boolean;
  @Input() ripple!: boolean;
  @Input() useCustomIcon!: boolean;
  @Input() label?: label;
  @Input() isChecked: boolean = false;

  onChange: any = () => {};
  onTouch: any = () => {};

  rootClass!: string;
  switchClass!: string;
  iconClass!: string;
  circleClass!: string;
  containerClass!: string;
  labelClass!: string;
  rippleClass!: string;

  constructor() {
    super();
    this.color = this.color ?? DefaultCheckBox.color;
    this.className = this.className ?? DefaultCheckBox.className;
    this.disabled = this.disabled ?? DefaultCheckBox.disabled;
    this.label = this.label ?? DefaultCheckBox.label;
    this.ripple = this.ripple ?? DefaultCheckBox.ripple;
    this.useCustomIcon = this.useCustomIcon ?? DefaultCheckBox.useCustomIcon;
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
  ToggleSwitch(){
    this.isChecked =  !this.isChecked;
    this.onChange(this.isChecked);
    this.onTouch(this.isChecked);
  }

  compileRootClass(): string {
    var classes = '';
    classes += ConvertToClassName(ObjectToStr(SwitchTheme['root']));

    // add disabled class if check box is disabled
    if (this.disabled) {
      classes += ConvertToClassName(ObjectToStr(SwitchTheme['disabled']));
    }

    return ConvertToClassName(classes);
  }

  override getCompiledClassName(): string {
    var classes = '';
    // add input class
    classes += ConvertToClassName(ObjectToStr(SwitchTheme['input']));
    // add the color classes
    const colorObj = switchColors[this.color] as IPropsMapper<string>;
    const check = colorObj['input'];
    classes += ConvertToClassName(check);

    // add disabled class if check box is disabled
    if (this.disabled) {
      classes += ConvertToClassName(ObjectToStr(SwitchTheme['disabled']));
    }

    if (this.className) {
      classes += ConvertToClassName(this.className);
    }

    return twMerge(ConvertToClassName(classes).split(' '));
  }


  compileCircleClass(): string {
    var classes = '';
    classes += ConvertToClassName(ObjectToStr(SwitchTheme['circle']));

    const colorObj = switchColors[this.color] as IPropsMapper<string>;
    classes += ConvertToClassName(colorObj['circle']);
    classes += ConvertToClassName(colorObj['before']);

    return twMerge(ConvertToClassName(classes).split(' '));
  }



  ngOnInit(): void {
    this.rootClass = this.compileRootClass();
    this.switchClass = this.getCompiledClassName();
    this.containerClass = ConvertToClassName(
      ObjectToStr(SwitchTheme['container'])
    );
    this.labelClass = ConvertToClassName(ObjectToStr(SwitchTheme['label']));
    this.circleClass = this.compileCircleClass();
    this.rippleClass = ConvertToClassName(ObjectToStr(SwitchTheme['ripple']));
  }
}
