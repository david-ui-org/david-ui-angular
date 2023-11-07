import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  error,
  success,
  resizable,
  DefaultInputProps,
  TextAreaVarientMapper,
  size,
  variant,
  color,
  label,
  icon,
} from '../../types/componentTypes/input';
import { DUITheme } from '../../theme/theme-base';
import {
  ConvertToClassName,
  ObjectToStr,
} from '../../utilities/helpers/string-helper';
import { textAreaTheme } from '../../theme/components/textarea/textarea-theme';
import { twMerge } from 'tailwind-merge'; // Do not Use twMerge in this component
import { IPropsMapper } from '../../types/generic';
import textareaOutlinedColors from '../../theme/components/textarea/textarea-outline/textarea-outline-colors';
import textareaOutlinedLabelColors from '../../theme/components/textarea/textarea-outline/textarea-outline-label-colors';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'dui-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent extends DUITheme implements OnInit, ControlValueAccessor {
  @Input() variant!: variant;
  @Input() size!: size;
  @Input() color!: color;
  @Input() label!: label;
  @Input() error!: error;
  @Input() success!: success;
  @Input() icon!: icon | undefined;
  @Input() resizable!: resizable;

  @Input() cols!: number;
  @Input() rows!: number;
  @Input() placeholder!: string;
  @Input() disabled!: boolean;
  @Input() readonly!: boolean;
  @Input() required!: boolean;
  @Input() maxlength: number = 10;
  @Input() minlength!: number;
  @Input() name!: string;

  containerClass: string = '';
  textareaClass: string = '';
  labelClass: string = '';
  value : string = "";

  onChange: any = () => {};
  onTouch: any = () => {};

  constructor() {
    super();
    this.variant = this.variant ?? DefaultInputProps.variant;
    this.color = this.color ?? DefaultInputProps.color;
    this.size = this.size ?? DefaultInputProps.size;
    this.label = this.label ?? DefaultInputProps.label;
    this.icon = this.icon ?? DefaultInputProps.icon;
    this.error = this.error ?? DefaultInputProps.error;
    this.success = this.success ?? DefaultInputProps.success;
    this.resizable = this.resizable ?? DefaultInputProps.resizable;
    this.placeholder = this.placeholder ?? ""
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
  override getCompiledClassName(): string {
    var classes = '';

    // textare style
    classes += ConvertToClassName(ObjectToStr(textAreaTheme['textarea']));
    // variant textarea style
    let variantStyles = TextAreaVarientMapper[
      this.variant
    ] as IPropsMapper<any>;
    classes += ConvertToClassName(ObjectToStr(variantStyles['textarea']));

    // size 
    let sizetextareaStyle = variantStyles[this.size]['textarea'] as object;

    classes += ConvertToClassName(
      ObjectToStr(sizetextareaStyle)
    );
    // text area color
    var variantColorClass = variantStyles[
      'variantColor'
    ] as IPropsMapper<object>;
    classes += ConvertToClassName(
      ObjectToStr(variantColorClass[this.color])
    );


    return (ConvertToClassName(classes));
  }

  getlabelCompiledClassName(): string {
    var classes = '';

    // get label class
    classes += ConvertToClassName(ObjectToStr(textAreaTheme['label']));
    // variant label style
    let variantStyles = TextAreaVarientMapper[
      this.variant
    ] as IPropsMapper<any>;
    classes += ConvertToClassName(ObjectToStr(variantStyles['label']));
    // size 
    let sizelabelStyle = variantStyles[this.size]['label'] as object;

    classes += ConvertToClassName(
      ObjectToStr(sizelabelStyle)
    );

    // label color
    var labelColorClass = variantStyles[
      'labelColor'
    ] as IPropsMapper<object>;
    classes += ConvertToClassName(
      ObjectToStr(labelColorClass[this.color])
    );


    return (ConvertToClassName(classes));
  }
  ngOnInit(): void {
    this.containerClass = ConvertToClassName(
      ObjectToStr(textAreaTheme['container'])
    );
    this.labelClass = this.getlabelCompiledClassName();
    this.textareaClass = this.getCompiledClassName();
  }
}
