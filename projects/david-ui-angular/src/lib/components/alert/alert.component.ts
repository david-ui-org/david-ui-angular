import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DefaultAlert, className, color, variant } from '../../types/componentTypes/alert';

@Component({
  selector: 'dui-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() variant!: variant;
  @Input() color!: color;
  @Input() className!: className;
  @Input() open!: boolean;
  @Input() IsDismissible!: boolean;


  @Output() onAlertClosed: EventEmitter<boolean> = new EventEmitter();
  
  constructor(){
    this.variant = this.variant ?? DefaultAlert.variant;
    this.className = this.className ?? DefaultAlert.className;
    this.color = this.color ?? DefaultAlert.color;
    this.open = this.open ?? DefaultAlert.open;
    this.IsDismissible = this.IsDismissible ?? DefaultAlert.isDismissible;
  }

  closeAlert(){
    this.open = false;
    this.onAlertClosed.emit(false);
  }


}
