import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { DUITheme } from '../../theme/theme-base';
import {
  DefaultDialogProps,
  animate,
  className,
  open,
  size,
} from '../../types/componentTypes/dialog';
import {
  ConvertToClassName,
  ObjectToStr,
} from '../../utilities/helpers/string-helper';
import { dialogTheme } from '../../theme/components/dialog/dialog-theme';
import { twMerge } from 'tailwind-merge';
import { dialogHeaderTheme } from '../../theme/components/dialog/dialog-header-theme';
import { dialogBodyTheme } from '../../theme/components/dialog/dialog-body-theme';
import { dialogFooterTheme } from '../../theme/components/dialog/dialog-footer-theme';

@Component({
  selector: 'dui-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent extends DUITheme implements OnInit, OnChanges {
  @Input() open!: open;
  @Input() className!: className;
  @Input() size!: size;
  @Input() closeOnBackground!: boolean;
  @Input() animate!: animate;


  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  overlayClass: string = '';
  containerClass: string = '';
  headerClass: string = '';
  footerClass: string = '';

  constructor() {
    super();
    this.open = this.open ?? DefaultDialogProps.open;
    this.className = this.className ?? DefaultDialogProps.className;
    this.size = this.size ?? DefaultDialogProps.size;
    this.closeOnBackground = this.closeOnBackground ?? DefaultDialogProps.closeOnBackground;
    this.animate = this.animate ?? DefaultDialogProps.animate;
  }

  ngOnChanges() {
    if (this.open && this.size !== 'xxl') {
      // Lock body scroll when the overlay is active
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll when the overlay is removed
      document.body.style.overflow = 'scroll';
    }
  }

  closeOnBackgroundClick(){
    if (this.closeOnBackground) {
      this.open =!this.open;
      this.onClose.emit(this.open);
    }
  }

  override getCompiledClassName(): string {
    var classes = '';
    // container class
    classes += ConvertToClassName(ObjectToStr(dialogTheme['container']));
    // Size classes
    classes += ConvertToClassName(ObjectToStr(dialogTheme[this.size]));

    if (this.className) {
      classes += ConvertToClassName(this.className);
    }
    return twMerge(ConvertToClassName(classes).split(' '));
  }
  ngOnInit(): void {
    this.overlayClass = ConvertToClassName(ObjectToStr(dialogTheme['overlay']));
    this.containerClass = this.getCompiledClassName();
    this.headerClass = ConvertToClassName(
      ObjectToStr(dialogHeaderTheme['container'])
    );
    this.footerClass = ConvertToClassName(
      ObjectToStr(dialogFooterTheme['container'])
    );
  }
}
