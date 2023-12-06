import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PaginatedResponse } from '../../shared/models/paginatedRes';
import { DefaultPaginationProps, className, color, length, variant, visibleRangeLength } from '../../types/componentTypes/paginator';
import { DUITheme } from '../../theme/theme-base';
import { ConvertToClassName, ObjectToStr } from '../../utilities/helpers/string-helper';
import { PaginatorTheme } from '../../theme/components/paginator/paginator-theme';
import { PaginatorVariantTheme } from '../../theme/components/paginator/paginator-variants-theme';
import { IPropsMapper } from '../../types/generic';

@Component({
  selector: 'dui-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PaginatorComponent),
      multi: true,
    },
  ],
})
export class PaginatorComponent extends DUITheme
  implements OnInit, OnChanges, ControlValueAccessor
{
 
  @Input() variant!: variant;
  @Input() className!: className;
  @Input() color!: color;
  @Input() page!: number;
  @Input() pageSize!: number;
  @Input() length!: length;
  @Input() showFirstLastOption!: boolean;
  @Input() visibleRangeLength! : visibleRangeLength;
  @Input() pageSizes: number[]= [5,10,15,20,25];

  
  public onChangeFn = (_: any) => {};
  
  public onTouchedFn = () => {};
  
  public totalPages! : number ;
  public disabled!: boolean;
  public visiblePages!: number[];


  containerClass : string ='';
  buttonClass : string ='';
  pageClass : string ='';


  constructor(){
    super();
    this.variant = this.variant ?? DefaultPaginationProps.variant;
    this.color = this.color ?? DefaultPaginationProps.color;
    this.page = this.page ?? DefaultPaginationProps.page;
    this.pageSize = this.pageSize ?? DefaultPaginationProps.pageSize;
    this.length = this.length ?? DefaultPaginationProps.length;
    this.showFirstLastOption = this.showFirstLastOption ?? DefaultPaginationProps.showFirstLastOption;
    this.visibleRangeLength = this.visibleRangeLength ?? DefaultPaginationProps.visibleRangeLength;
  }

  override getCompiledClassName(): string {
    var classes = "";
    var variantStyles = PaginatorVariantTheme[this.variant] as IPropsMapper<any>
    classes += ConvertToClassName(ObjectToStr(variantStyles['button']))

    return ConvertToClassName(classes)
  }

   getCompiledPageClassName(): string {
    var classes = "";
    var variantStyles = PaginatorVariantTheme[this.variant] as IPropsMapper<any>
    classes += ConvertToClassName(ObjectToStr(variantStyles['page']))

    return ConvertToClassName(classes)
  }

  ngOnInit(): void {
    this.containerClass =  ConvertToClassName(ObjectToStr(PaginatorTheme['container']));
    this.pageClass = this.getCompiledPageClassName();
    this.buttonClass = this.getCompiledClassName();
    this.updateTotalPages();
    this.updateVisiblePages();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['length'] || changes['page'] || changes['pageSize']){
      this.updateTotalPages();
    } 
  }
  writeValue(value: PaginatedResponse): void {
    if (!value) return;

    this.page = value.page;
    this.pageSize = value.pageSize;
    this.updateTotalPages();
    this.updateVisiblePages();
  }
  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  private updateVisiblePages(): void {
    const length = Math.min(this.totalPages, this.visibleRangeLength);

    const startIndex = Math.max(
      Math.min((this.page - Math.ceil(length / 2)), (this.totalPages - length)),
      0
    );

    this.visiblePages = Array.from(
      new Array(length).keys(),
      (item) => item + startIndex + 1
    );
  }
  private updateTotalPages(): void {
    this.totalPages = Math.ceil(this.length / this.pageSize);
  }
  selectPage(page: number) {
    this.page = +page;
    this.updateVisiblePages();
    var paginatedRes : PaginatedResponse = {
      page: this.page,
      pageSize: this.pageSize
    }
    this.onChangeFn(paginatedRes);
  }

  public selectPageSize(pageSize: number): void {
    this.pageSize = +pageSize;
    this.updateTotalPages();
    this.updateVisiblePages();
    var paginatedRes : PaginatedResponse = {
      page: this.page,
      pageSize: this.pageSize
    }
    this.onChangeFn(paginatedRes);
  }
}
