import { Component, Input, OnInit } from '@angular/core';
import { DefaultTypography, className, color, variant } from '../../types/componentTypes/typography';
import { DUITheme } from '../../theme/theme-base';
import { ConvertToClassName, ObjectToStr } from '../../utilities/helpers/string-helper';
import typographyColors from '../../theme/components/typography/typography-colors';
import { typographyVariant } from '../../theme/components/typography/typography-variants';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'dui-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent extends DUITheme implements OnInit {
  @Input() variant!: variant;
  @Input() color!: color;
  @Input() className!: className;
  @Input() textGradient!: boolean;

  elementType! : string;

  compiledClass:string = '';

  constructor(){
    super();
    this.variant = this.variant ?? DefaultTypography.variant;
    this.color = this.color ?? DefaultTypography.color;
    this.className = this.className ?? DefaultTypography.className;
    this.textGradient = this.textGradient ?? DefaultTypography.textGradient;
  }

  override getCompiledClassName(): string {
    var classes:string = '';
    // get typography variant class
    classes += ConvertToClassName(ObjectToStr(typographyVariant[this.variant]))
  
    if (this.textGradient) {
      // add color if gradient enabled
      classes += ConvertToClassName(ObjectToStr(typographyVariant["textGradient"]));
      classes += ConvertToClassName(ObjectToStr(typographyColors[this.color]));
    }else{
      // add color without gradient
      var colorObj : {[index: string]:any} = typographyColors[this.color];
      classes += ConvertToClassName(colorObj['color'])
    }
    if (this.className) {
      classes += ConvertToClassName(this.className);
    }


    return twMerge(ConvertToClassName(classes).split(" "));
  }
  ngOnInit(): void {
    this.compiledClass = this.getCompiledClassName();
  }
 
}
