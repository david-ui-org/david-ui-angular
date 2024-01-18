import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { twMerge } from 'tailwind-merge';

import { ConvertToClassName, ObjectToStr } from '../../utilities/helpers/string-helper';
import { DefaultRadioButton, className, color, icon, label } from '../../types/componentTypes/radio';
import { DUITheme } from '../../theme/theme-base';
import { RadioTheme } from '../../theme/components/radio/radio-theme';
import radioColors from '../../theme/components/radio/radio-colors';

@Component({
  selector: 'dui-radio',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadiobuttonComponent),
      multi: true,
    },
  ],
})
export class RadiobuttonComponent extends DUITheme implements ControlValueAccessor,OnInit {
  @Input() color!: color;
  @Input() className!: className;
  @Input() containerClassName!: className;
  @Input() disabled!: boolean;
  @Input() ripple!: boolean;
  @Input() useCustomIcon!: icon;
  @Input() label?: label;
  @Input({required: true}) value?: string;
  @Input({required: true}) name?: string;


  onChange: any = () => {};
  onTouch: any = () => {};

  selectedValue : string = '';
  radioButtonClass!: string;
  iconClass!: string;
  containerClass!: string;
  labelClass!: string;

  constructor() {
    super();
    this.color = this.color ?? DefaultRadioButton.color;
    this.className = this.className ?? DefaultRadioButton.className;
    this.disabled = this.disabled ?? DefaultRadioButton.disabled;
    this.value = this.value ?? DefaultRadioButton.value;
    this.name = this.name ?? DefaultRadioButton.name;
    this.label = this.label ?? DefaultRadioButton.label;
    this.ripple = this.ripple ?? DefaultRadioButton.ripple;
    this.useCustomIcon = this.useCustomIcon ?? DefaultRadioButton.useCustomIcon;
  }
  writeValue(value: string): void {
    this.selectedValue = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch= fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  OnModelChange(val: any){
    this.selectedValue = val;
    this.onChange(val);
  }

  override getCompiledClassName(): string {
    var classes = '';
    // add input class
    classes += ConvertToClassName(ObjectToStr(RadioTheme['input']));
    // add the color classes
    classes += ConvertToClassName(ObjectToStr(radioColors[this.color]));

    // add disabled class if check box is disabled
    if (this.disabled) {
      classes += ConvertToClassName(ObjectToStr(RadioTheme['disabled']));
    }

    if (this.className) {
      classes += ConvertToClassName(this.className);
    }

    return twMerge(ConvertToClassName(classes).split(' '));
  }

  getContainerCompiledClass(): string{
    var containerClass : string = '';
    containerClass += ConvertToClassName(
      ObjectToStr(RadioTheme['container'])
    );
    if (this.containerClassName) {
      containerClass += ConvertToClassName(this.containerClassName);
    }
    return twMerge(ConvertToClassName(containerClass).split(' '));

  }
  ngOnInit(): void {
    this.radioButtonClass = this.getCompiledClassName();
    this.iconClass = ConvertToClassName(ObjectToStr(RadioTheme['icon'])) + ConvertToClassName(ObjectToStr(radioColors[this.color]));;
    this.containerClass = this.getContainerCompiledClass();
    this.labelClass = ConvertToClassName(ObjectToStr(RadioTheme['label']));
  }
}
