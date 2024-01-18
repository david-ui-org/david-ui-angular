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
  DUIPaginator,
  DUIBreadCrumb
} from 'projects/david-ui-angular/src/public-api';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../docs/footer/footer.component';
import { FeaturePreviewComponent } from './components/feature-preview/feature-preview.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PropertiesTableComponent } from './components/properties-table/properties-table.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { CodeComponent } from './components/code/code.component';
import { H1Component } from './components/h1/h1.component';
import { H2Component } from './components/h2/h2.component';

@NgModule({
  declarations: [
    CodePreviewerComponent,
    FooterComponent,
    FeaturePreviewComponent,
    NavbarComponent,
    PropertiesTableComponent,
    ParagraphComponent,
    CodeComponent,
    H1Component,
    H2Component
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
    DUIPaginator,
    DUIBreadCrumb,

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
    DUIPaginator,
    DUIBreadCrumb,

    PropertiesTableComponent,
    ParagraphComponent,
    CodeComponent,
    H1Component,
    H2Component
  ],
})
export class SharedModule {}
