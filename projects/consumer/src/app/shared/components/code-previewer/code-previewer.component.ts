import { Component, Input } from '@angular/core';

@Component({
  selector: 'code-previewer',
  templateUrl: './code-previewer.component.html',
  styleUrls: ['./code-previewer.component.scss']
})
export class CodePreviewerComponent {
  @Input({required: true}) Code! : string;
}
