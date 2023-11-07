import { Component, Input, OnInit } from '@angular/core';
import { DefaultAvatar, className, color, size, variant } from '../../types/componentTypes/avatar';
import { DUITheme } from '../../theme/theme-base';
import { ConvertToClassName, ObjectToStr } from '../../utilities/helpers/string-helper';
import { AvatarPropsMapper } from '../../theme/components/avatar/avatar-theme';
import avatarBorderColor from '../../theme/components/avatar/avatar-borders';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'dui-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent extends DUITheme implements OnInit {

  @Input({required: true}) src! : string;
  @Input() variant!: variant;
  @Input() size!: size;
  @Input() borderColor!: color;
  @Input() className!: className;
  @Input() addBorder!: boolean;

  avatarClass:string = '';

  constructor(){
    super();
    this.variant = this.variant ?? DefaultAvatar.variant;
    this.size = this.size ?? DefaultAvatar.size;
    this.borderColor = this.borderColor ?? DefaultAvatar.borderColor;
    this.className = this.className ?? DefaultAvatar.className;
    this.addBorder = this.addBorder ?? DefaultAvatar.addBorder;
  }
  override getCompiledClassName(): string {
    var classes:string = '';
    // get avatar variant class
    classes += ConvertToClassName(ObjectToStr(AvatarPropsMapper[this.variant]))
    //get avatar size
    classes += ConvertToClassName(ObjectToStr(AvatarPropsMapper[this.size]));
    // add border color if enabled
    if (this.addBorder) {
      classes += ConvertToClassName(ObjectToStr(avatarBorderColor[this.borderColor]))
    }
    if (this.className) {
      classes += ConvertToClassName(this.className);
    }


    return twMerge(ConvertToClassName(classes).split(" "));
  }

  ngOnInit(): void {
    this.avatarClass = this.getCompiledClassName();
  }



}
