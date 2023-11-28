import { AfterContentInit, ChangeDetectorRef, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import {
  DefaultButton,
  className,
  color,
  fullWidth,
  size,
  variant,
} from '../../types/componentTypes/button';
import { DUITheme } from '../../theme/theme-base';
import {
  ConvertToClassName,
  ObjectToStr,
} from '../../utilities/helpers/string-helper';
import { ButtonGroupTheme } from '../../theme/components/button-group/buttonGroupTheme';
import buttonGroupDividerColor from '../../theme/components/button-group/buttonGroupDividerColors';
import { twMerge } from 'tailwind-merge';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'dui-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
})
export class ButtonGroupComponent extends DUITheme implements OnInit,AfterContentInit {
  @Input() variant!: variant;
  @Input() size!: size;
  @Input() color!: color;
  @Input() fullWidth!: fullWidth;
  @Input() className!: className;
  @Input() rounded!: boolean;
  @Input() ripple!: boolean;

  @ContentChildren(ButtonComponent) buttons! : QueryList<ButtonComponent>

  public buttonGroupClass!: string;

  constructor(private cd :ChangeDetectorRef) {
    super();
    this.variant = this.variant ?? DefaultButton.variant;
    this.size = this.size ?? DefaultButton.size;
    this.color = this.color ?? DefaultButton.color;
    this.ripple = this.ripple ?? DefaultButton.ripple;
  }

  override getCompiledClassName(): string {
    var className = '';
    // get size class
    className += ConvertToClassName(ObjectToStr(ButtonGroupTheme['initial']));
    //get divider class
    if (this.variant !== 'outlined') {
      className += ConvertToClassName(
        ObjectToStr(buttonGroupDividerColor[this.color])
      );
      className += ConvertToClassName('divide-x');
    }

    if (this.fullWidth) {
      className += ConvertToClassName('w-full');
    }

    return twMerge(ConvertToClassName(className).split(' '));
  }

  ngOnInit(): void {
    this.buttonGroupClass = this.getCompiledClassName();
  }
  ngAfterContentInit(): void {
    this.buttons.map((child,index) => {
      debugger;
      if (index == 0) {
        child.color = "gray"
        
      }
      console.log("COlor", child.color);
      
    });
    this.cd.markForCheck();
  }
}
