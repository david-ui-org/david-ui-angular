import { Component, Input } from '@angular/core';

@Component({
  selector: 'dui-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {
@Input() value!: string;

}
