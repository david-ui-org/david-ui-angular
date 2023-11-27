import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DUITheme } from '../../theme/theme-base';
import {
  DefaultSlider,
  barClassName,
  className,
  color,
  defaultValue,
  max,
  min,
  size,
  step,
  thumbClassName,
  trackClassName,
  value,
} from '../../types/componentTypes/slider';
import {
  ConvertToClassName,
  ObjectToStr,
} from '../../utilities/helpers/string-helper';
import { SliderTheme } from '../../theme/components/slider/slider-theme';
import sliderColor from '../../theme/components/slider/slider-colors';
import { IPropsMapper } from '../../types/generic';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'dui-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DUISliderComponent),
      multi: true,
    },
  ],
})
export class DUISliderComponent extends DUITheme implements OnInit {
  @Input() color!: color;
  @Input() size!: size;
  @Input() className!: className;
  @Input() trackClassName!: trackClassName;
  @Input() thumbClassName!: thumbClassName;
  @Input() barClassName!: barClassName;
  @Input({required : true}) defaultValue!: defaultValue;
  @Input() value!: value;
  @Input() min!: min;
  @Input() max!: max;
  @Input() step!: step;

  @Output() onSliderValueChange : EventEmitter<value> = new EventEmitter<value>();

  containerClass: string = '';
  sliderClass: string = '';
  sliderBarClass: string= '';

  constructor() {
    super();
    this.color = this.color ?? DefaultSlider.color;
    this.size = this.size ?? DefaultSlider.size;
    this.className = this.className ?? DefaultSlider.className;
    this.trackClassName = this.trackClassName ?? DefaultSlider.trackClassName;
    this.thumbClassName = this.thumbClassName ?? DefaultSlider.thumbClassName;
    this.barClassName = this.barClassName ?? DefaultSlider.barClassName;
    this.value = this.value ??  DefaultSlider.defaultValue;
    this.min = this.min ?? DefaultSlider.min;
    this.max = this.max ?? DefaultSlider.max;
    this.step = this.step ?? DefaultSlider.step;
  }

  override getCompiledClassName(): string {
    var classes = '';

    // container class
    classes += ConvertToClassName(ObjectToStr(SliderTheme['container']));

    // color class
    classes += ConvertToClassName(ObjectToStr(sliderColor[this.color]));

    // size class for container

    var styleSize = SliderTheme[this.size] as IPropsMapper<object>;
    classes += ConvertToClassName(ObjectToStr(styleSize['container']));

    if (this.className) {
      classes += ConvertToClassName(this.className);
    }

    return twMerge(ConvertToClassName(classes).split(' '));
  }

  getSliderCompiledClass(): string {
    var classes = '';

    // Set Slider class

    classes += ConvertToClassName(ObjectToStr(SliderTheme['slider']));

    // size class for slider
    var styleSize = SliderTheme[this.size] as IPropsMapper<object>;

    let sliderTrackClass = '';
    sliderTrackClass += ConvertToClassName(ObjectToStr(SliderTheme['track']));
    sliderTrackClass += ConvertToClassName(ObjectToStr(styleSize['track']));
    if (this.trackClassName) {
      sliderTrackClass += ConvertToClassName(this.trackClassName);
    }

    let sliderThumbClass = '';
    sliderThumbClass += ConvertToClassName(ObjectToStr(SliderTheme['thumb']));
    sliderThumbClass += ConvertToClassName(ObjectToStr(styleSize['thumb']));
    if (this.thumbClassName) {
      sliderThumbClass += ConvertToClassName(this.thumbClassName);
    }

    return ConvertToClassName(classes) + twMerge(ConvertToClassName(sliderTrackClass).split(' ')) + twMerge(ConvertToClassName(sliderThumbClass).split(' '))

  }

  getSliderBarCompiledClass(): string {
    var classes = '';

    // Set Slider class

    classes += ConvertToClassName(ObjectToStr(SliderTheme['bar']));

    // size class for slider
    var styleSize = SliderTheme[this.size] as IPropsMapper<object>;

    if (this.barClassName) {
      classes += ConvertToClassName(this.barClassName);
    }
    return twMerge(ConvertToClassName(classes).split(' '))

  }

  ngOnInit(): void {
    this.containerClass = this.getCompiledClassName();
    this.sliderClass = this.getSliderCompiledClass();
    this.sliderBarClass = this.getSliderBarCompiledClass()
  }

  OnValueChange(newVal:value){
    this.value = newVal;
    this.onSliderValueChange.emit(newVal);
    console.log(newVal);
    

  }
}
