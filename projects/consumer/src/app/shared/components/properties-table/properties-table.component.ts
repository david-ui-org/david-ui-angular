import { Component, Input } from '@angular/core';
import { Property } from '../../model/property.model';

@Component({
  selector: 'app-properties-table',
  templateUrl: './properties-table.component.html',
  styleUrls: ['./properties-table.component.scss']
})
export class PropertiesTableComponent {
  @Input() public properties: Property[] = [];
}
