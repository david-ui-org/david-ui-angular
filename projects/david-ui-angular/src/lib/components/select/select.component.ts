import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  DefaultSelectProps,
  SelectVariantMapper,
  color,
  error,
  label,
  size,
  success,
  variant,
} from '../../types/componentTypes/select';
import { DUITheme } from '../../theme/theme-base';
import {
  ConvertToClassName,
  ObjectToStr,
} from '../../utilities/helpers/string-helper';
import { SelectTheme } from '../../theme/components/select/select-theme';
import { CdkDropdownComponent } from '../../shared/components/cdk-dropdown/cdk-dropdown.component';
import { IPropsMapper } from '../../types/generic';
import selectOutlinedColors from '../../theme/components/select/select-outline-theme/select-outline-colors';
import selectOutlinedLabelColors from '../../theme/components/select/select-outline-theme/select-outline-label-colors';

@Component({
  selector: 'dui-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent
  extends DUITheme
  implements OnInit, AfterViewChecked
{
  selectedValue: string = '';
  @Input() variant!: variant;
  @Input() size!: size;
  @Input() color!: color;
  @Input() label!: label;
  @Input() error!: error;
  @Input() success!: success;
  @Input() autoHeight!: boolean;
  @Input() lockScroll!: boolean;
  @Input() placeholder!: string;
  @Input() disabled!: boolean;
  @Input() readonly!: boolean;
  @Input() required!: boolean;
  @Input() name!: string;

  containerClass: string = '';
  selectClass: string = '';
  optionsClass: string = '';
  arrowClass: string = '';
  labelClass: string = '';
  asteriskClasses: string = '';
  value: string = '';

  isOpen: boolean = false;

  constructor() {
    super();
    this.variant = this.variant ?? DefaultSelectProps.variant;
    this.color = this.color ?? DefaultSelectProps.color;
    this.size = this.size ?? DefaultSelectProps.size;
    this.label = this.label ?? DefaultSelectProps.label;
    this.error = this.error ?? DefaultSelectProps.error;
    this.success = this.success ?? DefaultSelectProps.success;
    this.placeholder = this.placeholder ?? '';
  }

  @Input({ required: true }) optionsList!: string[];

  @ViewChild(CdkDropdownComponent)
  public dropdown!: CdkDropdownComponent;

  override getCompiledClassName(): string {
    var classes = '';
    let state = this.isOpen ? 'open' : 'close';

    // Select style
    classes += ConvertToClassName(ObjectToStr(SelectTheme['select']));
    // variant Select style
    let variantStyles = SelectVariantMapper[this.variant] as IPropsMapper<any>;
    classes += ConvertToClassName(ObjectToStr(variantStyles['select']));

    // size
    let sizeSelectStyle = variantStyles[this.size]['select'] as object;

    classes += ConvertToClassName(ObjectToStr(sizeSelectStyle));
    // Select color
    let coloredStyles = selectOutlinedColors[this.color] as IPropsMapper<any>;
    classes += ConvertToClassName(ObjectToStr(coloredStyles[state]));

    // State Class
    let stateClass = variantStyles[state]['select'] as object;
    classes += ConvertToClassName(ObjectToStr(stateClass));

    return ConvertToClassName(classes);
  }

  getlabelCompiledClassName(): string {
    var classes = '';
    let state = this.isOpen ? 'open' : 'close';

    // get label class
    classes += ConvertToClassName(ObjectToStr(SelectTheme['label']));
    // variant label style
    let variantStyles = SelectVariantMapper[this.variant] as IPropsMapper<any>;
    classes += ConvertToClassName(ObjectToStr(variantStyles['label']));

    // label color
    let coloredStyles = selectOutlinedLabelColors[
      this.color
    ] as IPropsMapper<any>;
    classes += ConvertToClassName(ObjectToStr(coloredStyles[state]));
    classes += ConvertToClassName(ObjectToStr(coloredStyles[state]));
    // State Class
    let stateClass = variantStyles[state]['label'] as object;
    classes += ConvertToClassName(ObjectToStr(stateClass));
    // size
    let sizelabelStyle = variantStyles[this.size]['label']['states'][
      state
    ] as object;

    classes += ConvertToClassName(ObjectToStr(sizelabelStyle));
    return ConvertToClassName(classes);
  }

  ngOnInit(): void {
    this.containerClass = ConvertToClassName(
      ObjectToStr(SelectTheme['container'])
    );
    var optionBase = SelectTheme['option'] as IPropsMapper<any>;
    this.optionsClass = ConvertToClassName(ObjectToStr(optionBase['initial']));
    this.arrowClass = this.getBaseArrowClass();
    this.selectClass = this.getCompiledClassName();
    this.labelClass = this.getlabelCompiledClassName();
  }

  getActiveArrowClass(): string {
    let arrowState = this.isOpen ? 'active' : 'initial';
    let arrowStyle = SelectTheme['arrow'] as IPropsMapper<object>;
    return ConvertToClassName(ObjectToStr(arrowStyle[arrowState]));
  }
  getBaseArrowClass(): string {
    let arrowState = 'initial';
    let arrowStyle = SelectTheme['arrow'] as IPropsMapper<object>;
    return ConvertToClassName(ObjectToStr(arrowStyle[arrowState]));
  }

  OnModelChange(val: string) {
    console.log('Select value is :', val);
  }

  OnShowDropDown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.dropdown.show();
      this.arrowClass += this.getActiveArrowClass();
    } else {
      this.dropdown.hide();
      this.arrowClass = this.getBaseArrowClass()
    }
    this.selectClass = this.getCompiledClassName();
    this.labelClass = this.getlabelCompiledClassName();
  }

  ngAfterViewChecked() {
    this.isOpen = this.dropdown.showing;
  }
}
