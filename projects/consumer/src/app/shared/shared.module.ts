import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { CodePreviewerComponent } from './components/code-previewer/code-previewer.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import {
  DUIAccordion,
  DUIAlert,
  DUIAvatar,
  DUIButton,
  DUICheckbox,
  DUIChip,
  DUICollapse,
  DUIIcon,
  DUIDialog,
  DUIInput,
  DUIRadio,
  DUISelect,
  DUITextarea,
  DUITypography,
  DUISwitch,
  DUISlider,
  DUIButtonGroup,
  DUIIconButton,
  DUIPaginator
} from 'projects/david-ui-angular/src/public-api';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../docs/footer/footer.component';
import { FeaturePreviewComponent } from './components/feature-preview/feature-preview.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    CodePreviewerComponent,
    FooterComponent,
    FeaturePreviewComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    HighlightModule,
    ClipboardModule,
    FormsModule,
    FontAwesomeModule,
    ClipboardModule,

    DUIAccordion,
    DUIButton,
    DUIAlert,
    DUIAvatar,
    DUITypography,
    DUICheckbox,
    DUIRadio,
    FormsModule,
    DUIDialog,
    DUITextarea,
    DUIInput,
    DUISelect,
    DUIChip,
    DUICollapse,
    DUIIcon,
    DUISwitch,
    DUISlider,
    DUIButtonGroup,
    DUIIconButton,
    DUIPaginator
  ],
  exports: [
    CodePreviewerComponent,
    CommonModule,
    HighlightModule,
    ClipboardModule,
    FormsModule,
    ClipboardModule,
    FontAwesomeModule,
    FooterComponent,
    NavbarComponent,

    DUIAccordion,
    DUIButton,
    DUIAlert,
    DUIAvatar,
    DUITypography,
    DUICheckbox,
    DUIRadio,
    FormsModule,
    DUIDialog,
    DUITextarea,
    DUIInput,
    DUISelect,
    DUIIcon,
    DUICollapse,
    FeaturePreviewComponent,
    DUIChip,
    DUISwitch,
    DUISlider,
    DUIButtonGroup,
    DUIIconButton,
    DUIPaginator

  ],
})
export class SharedModule {}
