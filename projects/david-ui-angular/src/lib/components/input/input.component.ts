import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  DefaultInputProps,
  InputVarientMapper,
  color,
  error,
  icon,
  label,
  size,
  success,
  variant,
} from '../../types/componentTypes/input';
import { DUITheme } from '../../theme/theme-base';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  ConvertToClassName,
  ObjectToStr,
} from '../../utilities/helpers/string-helper';
import { InputTheme } from '../../theme/components/input/input-theme';
import { IPropsMapper } from '../../types/generic';

@Component({
  selector: 'dui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent
  extends DUITheme
  implements OnInit, ControlValueAccessor
{
  @Input() variant!: variant;
  @Input() size!: size;
  @Input() color!: color;
  @Input() label!: label;
  @Input() error!: error;
  @Input() success!: success;
  @Input() icon!: icon | undefined;
  @Input() placeholder!: string;
  @Input() disabled!: boolean;
  @Input() readonly!: boolean;
  @Input() required!: boolean;
  @Input() maxlength: number = 10;
  @Input() minlength!: number;
  @Input() name!: string;

  onChange: any = () => {};
  onTouch: any = () => {};

  asteriskClasses: string = '';
  containerClass: string = '';
  inputClass: string = '';
  labelClass: string = '';
  value: string = '';

  constructor() {
    super();
    this.variant = this.variant ?? DefaultInputProps.variant;
    this.color = this.color ?? DefaultInputProps.color;
    this.size = this.size ?? DefaultInputProps.size;
    this.label = this.label ?? DefaultInputProps.label;
    this.icon = this.icon ?? DefaultInputProps.icon;
    this.error = this.error ?? DefaultInputProps.error;
    this.success = this.success ?? DefaultInputProps.success;
    this.placeholder = this.placeholder ?? '';
  }

  override getCompiledClassName(): string {
    var classes = '';

    // Input style
    classes += ConvertToClassName(ObjectToStr(InputTheme['input']));
    // variant Input style
    let variantStyles = InputVarientMapper[this.variant] as IPropsMapper<any>;
    classes += ConvertToClassName(ObjectToStr(variantStyles['input']));

    // size
    let sizeInputStyle = variantStyles[this.size]['input'] as object;

    classes += ConvertToClassName(ObjectToStr(sizeInputStyle));
    // input color
    var variantColorClass = variantStyles[
      'variantColor'
    ] as IPropsMapper<object>;
    classes += ConvertToClassName(
      ObjectToStr(variantColorClass[this.color])
    );

    return ConvertToClassName(classes);
  }

  getlabelCompiledClassName(): string {
    var classes = '';

    // get label class
    classes += ConvertToClassName(ObjectToStr(InputTheme['label']));
    // variant label style
    let variantStyles = InputVarientMapper[this.variant] as IPropsMapper<any>;
    classes += ConvertToClassName(ObjectToStr(variantStyles['label']));
    // size
    let sizelabelStyle = variantStyles[this.size]['label'] as object;

    classes += ConvertToClassName(ObjectToStr(sizelabelStyle));

    // label color
    var variantLabelColorClass = variantStyles[
      'labelColor'
    ] as IPropsMapper<object>;
    classes += ConvertToClassName(
      ObjectToStr(variantLabelColorClass[this.color])
    );

    return ConvertToClassName(classes);
  }

  OnModelChange(value: string) {
    this.value = value;
    this.onChange(value);
    this.onTouch(value);
  }

  writeValue(val: string): void {
    this.value = val;
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
  ngOnInit(): void {
    this.containerClass = ConvertToClassName(
      ObjectToStr(InputTheme['container'])
    );
    this.labelClass = this.getlabelCompiledClassName();
    this.inputClass = this.getCompiledClassName();
  }
}
