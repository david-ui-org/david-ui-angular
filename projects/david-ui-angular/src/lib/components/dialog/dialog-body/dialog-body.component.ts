import { Component, Input } from '@angular/core';
import { DefaultDialogProps, className } from '../../../types/componentTypes/dialog';
import { twMerge } from 'tailwind-merge';
import { ConvertToClassName, ObjectToStr } from '../../../utilities/helpers/string-helper';
import { dialogBodyTheme } from '../../../theme/components/dialog/dialog-body-theme';

@Component({
  selector: 'dui-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent {

  @Input() className!: className;
  @Input() divider!: boolean;

  bodyClass: string = '';

  constructor(){
    this.divider = this.divider ?? DefaultDialogProps.divider;

  }

  ngOnInit(): void {
    var dividerClass = this.divider
    ? ConvertToClassName(ObjectToStr(dialogBodyTheme['divider']))
    : '';
    var className = this.className ? ConvertToClassName(this.className) : '';
    this.bodyClass = twMerge(
      ConvertToClassName(ObjectToStr(dialogBodyTheme['container'])) +
        dividerClass + className
    );
    
  }


}
