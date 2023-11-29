import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ButtonVarientMapper, DefaultButton, className, color, fullWidth, size, variant } from '../../types/componentTypes/button';
import { DUITheme } from '../../theme/theme-base';
import { twMerge } from 'tailwind-merge';
import { ConvertToClassName, ObjectToStr } from '../../utilities/helpers/string-helper';
import { IconButtonTheme } from '../../theme/components/iconbutton/iconbutton-theme';

@Component({
  selector: 'dui-icon-button',
  templateUrl: './iconbutton.component.html',
  styleUrls: ['./iconbutton.component.scss']
})
export class IconbuttonComponent extends DUITheme implements OnInit {
  @Input() variant!: variant;
  @Input() size!: size;
  @Input() color!: color;
  @Input() fullWidth!: fullWidth;
  @Input() className!: className;
  @Input() rounded!: boolean;
  @Input() ripple!: boolean;

  protected iconButtonClass!: string;

  constructor(public cd :ChangeDetectorRef) {
    super();
    this.variant = this.variant ?? DefaultButton.variant;
    this.size = this.size ?? DefaultButton.size;
    this.color = this.color ?? DefaultButton.color;
    this.ripple = this.ripple ?? DefaultButton.ripple
  }

  ngOnInit(): void {
    this.iconButtonClass = this.getCompiledClassName();
  }

  public DetectChangedConfigurations(){
    this.iconButtonClass = this.getCompiledClassName();
  }

  override getCompiledClassName(): string {
    var className = '';
    className += ConvertToClassName(ObjectToStr(IconButtonTheme['IconButton']));

    // get size class
    className += ConvertToClassName(ObjectToStr(IconButtonTheme[this.size]));
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
