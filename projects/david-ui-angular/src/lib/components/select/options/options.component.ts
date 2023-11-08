import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { SelectTheme } from '../../../theme/components/select/select-theme';
import { IPropsMapper } from '../../../types/generic';
import { ConvertToClassName, ObjectToStr } from '../../../utilities/helpers/string-helper';
import { SelectComponent } from '../select.component';
import { DuiSelectService } from '../../../services/select/dui-select.service';

@Component({
  selector: 'dui-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  @Input() value!: string;
  @Input() key!: string;

  private select!: SelectComponent;
  constructor(private dropdownService: DuiSelectService){
    this.select = dropdownService.getSelectInstance();
  }

  optionsClass: string ='';

  ngOnInit(): void {
    var optionBase = SelectTheme['option'] as IPropsMapper<any>;
    this.optionsClass = ConvertToClassName(ObjectToStr(optionBase['initial']));
  }

  @HostBinding('class.active')
  public active =false

  @HostListener('click', ['$event'])
  public onClick(event: UIEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.select.selectOption(this);
  }
}
