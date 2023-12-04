import {
  Component,
  DoCheck,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { SelectTheme } from '../../../theme/components/select/select-theme';
import { IPropsMapper } from '../../../types/generic';
import {
  ConvertToClassName,
  ObjectToStr,
} from '../../../utilities/helpers/string-helper';
import { SelectComponent } from '../select.component';
import { DuiSelectService } from '../../../services/select/dui-select.service';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'dui-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit,DoCheck {
  @Input() value!: string;
  @Input() key!: string;
  @Input() disabled!: boolean;
  
  private select!: SelectComponent;
  constructor(private dropdownService: DuiSelectService) {
    this.select = dropdownService.getSelectInstance();
  }

  optionsClass: string = '';

  ngOnInit(): void {
    this.optionsClass = this.getOptionsCompiledClass();
  }

  ngDoCheck(): void {
    this.optionsClass = this.getOptionsCompiledClass();
  }

  getOptionsCompiledClass(): string {
    var classes = '';
    var optionBase = SelectTheme['option'] as IPropsMapper<any>;

    classes += ConvertToClassName(ObjectToStr(optionBase['initial']));
    if (this.select.selectedValue === this.value) {
      classes += ConvertToClassName(ObjectToStr(optionBase['active']));
    }
    if (this.disabled) {
      classes += ConvertToClassName(ObjectToStr(optionBase['disabled']));
    }

    return twMerge(ConvertToClassName(classes).split(' '));
  }

  @HostListener('click', ['$event'])
  public onClick(event: UIEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.select.selectOption(this);
  }
}
