import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DUITheme } from '../../theme/theme-base';
import {
  ChipVariantMapper,
  DefaultChip,
  className,
  color,
  size,
  variant,
} from '../../types/componentTypes/chip';
import { ChipTheme } from '../../theme/components/chip/chip-theme';
import {
  ConvertToClassName,
  ObjectToStr,
} from '../../utilities/helpers/string-helper';
import { IPropsMapper } from '../../types/generic';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'dui-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class DUIChipComponent extends DUITheme implements OnInit {
  @Input() variant!: variant;
  @Input() size!: size;
  @Input() color!: color;
  @Input() isDismissible!: boolean;
  @Input() hasIcon!: boolean;
  @Input() className!: className;

  chipClass: string = '';
  contentClass: string = '';
  iconClass: string = '';

  @Output() OnClose: EventEmitter<void> = new EventEmitter();

  constructor() {
    super();
    this.variant = this.variant ?? DefaultChip.variant;
    this.size = this.size ?? DefaultChip.size;
    this.color = this.color ?? DefaultChip.color;
    this.className = this.className ?? DefaultChip.className;
    this.isDismissible = this.isDismissible ?? DefaultChip.isDismissible;
    this.hasIcon = this.hasIcon ?? DefaultChip.hasIcon;
  }

  override getCompiledClassName(): string {
    // base Chip class
    var baseChip = ConvertToClassName(ObjectToStr(ChipTheme['chip']));

    // Chip variant & Color Class
    var chipVariant = ConvertToClassName(
      ObjectToStr(ChipVariantMapper[this.variant][this.color])
    );

    // Chip Size
    var styleClass = ChipTheme[this.size] as IPropsMapper<object>;
    var chipSize = ConvertToClassName(ObjectToStr(styleClass['chip']));

    var customClass = ConvertToClassName(this.className);

    return twMerge([baseChip, chipVariant, chipSize, customClass]);
  }

  getIconClass():string{
    var classes = '';
      // base Chip Icon class
      classes += ConvertToClassName(ObjectToStr(ChipTheme['icon']));
      var styleClass = ChipTheme[this.size] as IPropsMapper<object>;

      classes += ConvertToClassName(ObjectToStr(styleClass['icon']));
   
      return ConvertToClassName(classes)
  }
  getContentClass():string{
    var classes = '';
    if (this.hasIcon && this.size === "sm") {
      classes = "ml-4";
    }
    else if (this.hasIcon && this.size === "md"){
      classes =  "ml-[18px]";

    }else if (this.hasIcon && this.size === "lg"){
      classes =  "ml-5";

    }
    return classes;
  }
  ngOnInit(): void {
    this.chipClass = this.getCompiledClassName();
    this.contentClass = this.getContentClass();
    this.iconClass = this.getIconClass();
  }
}
