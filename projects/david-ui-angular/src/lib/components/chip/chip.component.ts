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
  @Input() className!: className;
  @Input() open!: boolean;

  chipClass: string = '';

  @Output() OnClose: EventEmitter<void> = new EventEmitter();

  constructor() {
    super();
    this.variant = this.variant ?? DefaultChip.variant;
    this.size = this.size ?? DefaultChip.size;
    this.color = this.color ?? DefaultChip.color;
    this.className = this.className ?? DefaultChip.className;
    this.open = this.open ?? DefaultChip.open;
    this.isDismissible = this.isDismissible ?? DefaultChip.isDismissible;
  }

  override getCompiledClassName(): string {
    // base Chip class
    var baseChip = ConvertToClassName(ObjectToStr(ChipTheme['chip']));

    // Chip variant Class
    var chipVariant = ConvertToClassName(
      ObjectToStr(ChipVariantMapper[this.variant][this.color])
    );

    // Chip Size
    var styleClass = ChipTheme[this.size] as IPropsMapper<object>;
    var chipSize = ConvertToClassName(ObjectToStr(styleClass['chip']));

    var customClass = ConvertToClassName(this.className);

    return twMerge([baseChip, chipVariant, chipSize, customClass]);
  }
  ngOnInit(): void {
    this.chipClass = this.getCompiledClassName();
  }
}
