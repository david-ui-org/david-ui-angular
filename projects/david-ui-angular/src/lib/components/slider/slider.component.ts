import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DUITheme } from '../../theme/theme-base';
import {
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
  @Input() defaultValue!: defaultValue;
  @Input() value!: value;
  @Input() min!: min;
  @Input() max!: max;
  @Input() step!: step;

  containerClass: string = '';

  override getCompiledClassName(): string {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
