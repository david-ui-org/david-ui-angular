import {
  AfterViewChecked,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  Self,
  ViewChild,
  forwardRef,
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
import { OptionsComponent } from './options/options.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DuiSelectService } from '../../services/select/dui-select.service';

@Component({
  selector: 'dui-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
    DuiSelectService,
    
  ],
})
export class SelectComponent
  extends DUITheme
  implements OnInit, AfterViewChecked, ControlValueAccessor
{
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

  //#region Class Fields
  containerClass: string = '';
  selectClass: string = '';
  optionContainer: string = '';
  optionsClass: string = '';
  arrowClass: string = '';
  labelClass: string = '';
  asteriskClasses: string = '';
  //#endregion

  value: string = '';
  selectedValue: string = '';

  isOpen: boolean = false;

  @Input({ required: true }) optionsList!: string[];

  @ViewChild('input')
  public input!: ElementRef;
  @ContentChildren(OptionsComponent)
  public options!: QueryList<OptionsComponent>;

  public selectedOption!: OptionsComponent;

  @ViewChild(CdkDropdownComponent)
  public dropdown!: CdkDropdownComponent;

  public onChangeFn = (_: any) => {};

  public onTouchedFn = () => {};

  constructor(@Self() private dropdownService: DuiSelectService) {
    super();
    this.dropdownService.registerSelectInstance(this);
    this.variant = this.variant ?? DefaultSelectProps.variant;
    this.color = this.color ?? DefaultSelectProps.color;
    this.size = this.size ?? DefaultSelectProps.size;
    this.label = this.label ?? DefaultSelectProps.label;
    this.error = this.error ?? DefaultSelectProps.error;
    this.success = this.success ?? DefaultSelectProps.success;
    this.placeholder = this.placeholder ?? '';
  }
  writeValue(obj: any): void {
    this.selectedValue = obj;
  }
  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public onTouched() {
    this.onTouchedFn();
  }

  public onChange() {
    this.onChangeFn(this.selectedValue);
  }

  override getCompiledClassName(): string {
    var classes = '';
    let state = this.getSelectState();

    // Select style
    classes += ConvertToClassName(ObjectToStr(SelectTheme['select']));
    // variant Select style
    let variantStyles = SelectVariantMapper[this.variant] as IPropsMapper<any>;
    classes += ConvertToClassName(ObjectToStr(variantStyles['select']));

    // size
    let sizeSelectStyle = variantStyles[this.size]['select'] as object;

    classes += ConvertToClassName(ObjectToStr(sizeSelectStyle));
    // Select color
    var variantColorClass = variantStyles[
      'variantColor'
    ] as IPropsMapper<object>;
    let coloredStyles = variantColorClass[this.color] as IPropsMapper<any>;
    classes += ConvertToClassName(ObjectToStr(coloredStyles[state]));

    // State Class
    let stateClass = variantStyles[state]['select'] as object;
    classes += ConvertToClassName(ObjectToStr(stateClass));

    return ConvertToClassName(classes);
  }

  getlabelCompiledClassName(): string {
    var classes = '';
    let state = this.getSelectState();

    // get label class
    classes += ConvertToClassName(ObjectToStr(SelectTheme['label']));
    // variant label style
    let variantStyles = SelectVariantMapper[this.variant] as IPropsMapper<any>;
    classes += ConvertToClassName(ObjectToStr(variantStyles['label']));

    // label color
    var labelColorClass = variantStyles[
      'labelColor'
    ] as IPropsMapper<object>;
    let coloredStyles = labelColorClass[
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

  /**
   * Method To determine the current state of
   * Select Component
   * @returns state {open,withValue,close}
   */
  getSelectState(): string {
    let currentState = 'close';
    if (this.isOpen) {
      currentState = 'open';
    } else if (!this.isOpen && this.selectedValue) {
      currentState = 'withValue';
    }
    return currentState;
  }

  ngOnInit(): void {
    this.containerClass = ConvertToClassName(
      ObjectToStr(SelectTheme['container'])
    );
    this.optionContainer = ConvertToClassName(
      ObjectToStr(SelectTheme['option-container'])
    );
    this.asteriskClasses = ConvertToClassName(
      ObjectToStr(SelectTheme['asterik-class'])
    );
    var optionBase = SelectTheme['option'] as IPropsMapper<any>;
    this.optionsClass = ConvertToClassName(ObjectToStr(optionBase['initial']));
    this.arrowClass = this.getBaseArrowClass();
    this.selectClass = this.getCompiledClassName();
    this.labelClass = this.getlabelCompiledClassName();
    this.dropdownService.afterClosed.subscribe((value) => {
      if (value != undefined) {
        this.isOpen =value;
        this.setClasses();
      }
    });
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
  public hideDropdown() {
    this.dropdown.hide();
  }
  public onDropMenuIconClick(event: UIEvent) {
    event.stopPropagation();
    setTimeout(() => {
      this.input.nativeElement.focus();
      this.input.nativeElement.click();
    }, 10);
  }

  setClasses() {
    if (this.isOpen) {
      this.arrowClass += this.getActiveArrowClass();
    } else {
      this.arrowClass = this.getBaseArrowClass();
    }
    this.selectClass = this.getCompiledClassName();
    this.labelClass = this.getlabelCompiledClassName();
  }

  ToggleDropDown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.dropdown.show();
    } else {
      this.dropdown.hide();
    }
    this.setClasses();
  }
  public selectOption(option: OptionsComponent) {
    //this.selected = option.key;
    this.selectedOption = option;
    this.selectedValue = option.value;
    console.log('Selected', this.selectedValue);
    this.ToggleDropDown();
    this.input.nativeElement.focus();
    this.onChange();
  }

  ngAfterViewChecked() {
    this.isOpen = this.dropdown.showing;
  }
  ngOnDestroy() {
    this.dropdownService.afterClosed.unsubscribe();
  }
}
