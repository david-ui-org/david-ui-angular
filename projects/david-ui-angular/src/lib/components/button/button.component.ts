import { ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { twMerge } from 'tailwind-merge'
//#region Custom Imports
import {
  className,
  color,
  fullWidth,
  size,
  variant,
  DefaultButton,
  DefaultButtonPropsMapper,
  ButtonVarientMapper
} from '../../types/componentTypes/button';
import { ConvertToClassName, ObjectToStr } from '../../utilities/helpers/string-helper';
import { DUITheme } from '../../theme/theme-base';
import { buttonTheme } from '../../theme/components/button/button-theme';
//#endregion

@Component({
  selector: 'dui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent extends DUITheme implements OnInit {
  @Input() variant!: variant;
  @Input() size!: size;
  @Input() color!: color;
  @Input() fullWidth!: fullWidth;
  @Input() className!: className;
  @Input() rounded!: boolean;
  @Input() ripple!: boolean;

  protected buttonClass!: string;

  constructor(public cd :ChangeDetectorRef) {
    super();
    this.variant = this.variant ?? DefaultButton.variant;
    this.size = this.size ?? DefaultButton.size;
    this.color = this.color ?? DefaultButton.color;
    this.ripple = this.ripple ?? DefaultButton.ripple
  }

  ngOnInit(): void {
    this.buttonClass = this.getCompiledClassName();
  }

  public DetectChangedConfigurations(){
    this.buttonClass = this.getCompiledClassName();
  }

  override getCompiledClassName(): string {
    var className = '';

    // set initial class
    className += ConvertToClassName(ObjectToStr(buttonTheme['initial']));

    // get size class
    className += ConvertToClassName(DefaultButtonPropsMapper[this.size]);
    //get variant class
    className += ConvertToClassName(ObjectToStr(ButtonVarientMapper[this.variant][this.color]));

    if (this.className) {
      className += ConvertToClassName(this.className);
    }
    if(this.rounded){
      className += ConvertToClassName("rounded-full");
    }
    if (this.fullWidth) {
      className += ConvertToClassName("!w-full");
      
    }
    var addedClasses = twMerge(ConvertToClassName(className).split(" "));
    return addedClasses;
  }
}
