import { Component, Input, OnInit } from '@angular/core';
import { DUITheme } from '../../theme/theme-base';
import {
  DefaultCollapse,
  className,
  open,
} from '../../types/componentTypes/collapse';
import { ConvertToClassName, ObjectToStr } from '../../utilities/helpers/string-helper';
import { CollapseTheme } from '../../theme/components/collapse/collapse-theme';
import { twMerge } from 'tailwind-merge';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'dui-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  animations: [
    trigger('Collapse', [
      state(
        'closed',
        style({
          height: '0',
          overflow: 'hidden',
          opacity: '0',
          visibility: 'hidden',
        })
      ),
      state(
        'open',
        style({
          overflow: 'hidden',
        })
      ),
      transition('open <=> closed', animate('200ms')),
    ]),
  ],
})
export class DUICollapseComponent extends DUITheme implements OnInit {
  @Input() className!: className;
  @Input({ required: true }) open!: open;

  collapseClass : string = '';

  constructor() {
    super();
    this.className = this.className ?? DefaultCollapse.className;
    this.open = this.open ?? DefaultCollapse.open;
  }

  override getCompiledClassName(): string {
    var classes = '';
    classes += ConvertToClassName(ObjectToStr(CollapseTheme['collapse']));

    if (this.className) {
      classes += ConvertToClassName(this.className);
    }

    return twMerge(ConvertToClassName(classes).split(' '));
  }
  ngOnInit(): void {
    this.collapseClass = this.getCompiledClassName();
  }
}
