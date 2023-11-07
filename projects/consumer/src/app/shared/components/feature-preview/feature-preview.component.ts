import { Component, Input } from '@angular/core';

@Component({
  selector: 'feature-preview',
  templateUrl: './feature-preview.component.html',
  styleUrls: ['./feature-preview.component.scss']
})
export class FeaturePreviewComponent {
  @Input() centered : boolean = true;
}
