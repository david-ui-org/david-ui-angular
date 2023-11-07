import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ButtonComponent } from './features/button/button.component';
import { AccordionComponent } from './features/accordion/accordion.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './docs-routing';
import { InstallationComponent } from './pages/installation/installation.component';
import { LicenseComponent } from './pages/license/license.component';
import { AboutTailwindComponent } from './pages/about-tailwind/about-tailwind.component';
import { AboutAngularComponent } from './pages/about-angular/about-angular.component';
import { ReleaseNotesComponent } from './pages/release-notes/release-notes.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { AlertComponent } from './features/alert/alert.component';
import { AvatarComponent } from './features/avatar/avatar.component';
import { CheckboxComponent } from './features/checkbox/checkbox.component';
import { DialogComponent } from './features/dialog/dialog.component';
import { InputComponent } from './features/input/input.component';
import { RadioComponent } from './features/radio/radio.component';
import { SelectComponent } from './features/select/select.component';
import { TextareaComponent } from './features/textarea/textarea.component';
import { TypographyComponent } from './features/typography/typography.component';
import { ThemingComponent } from './pages/theming/theming.component';
import { ColorsComponent } from './pages/colors/colors.component';
import { FontsComponent } from './pages/fonts/fonts.component';



@NgModule({
  declarations: [
    DocsComponent,
    MainComponent,
    SidebarComponent,
    ButtonComponent,
    AccordionComponent,
    InstallationComponent,
    LicenseComponent,
    AboutTailwindComponent,
    AboutAngularComponent,
    ReleaseNotesComponent,
    RightSidebarComponent,
    AlertComponent,
    AvatarComponent,
    CheckboxComponent,
    DialogComponent,
    InputComponent,
    RadioComponent,
    SelectComponent,
    TextareaComponent,
    TypographyComponent,
    ThemingComponent,
    ColorsComponent,
    FontsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    InstallationComponent,
    LicenseComponent,
    AboutTailwindComponent,
    AboutAngularComponent,
    ReleaseNotesComponent,
    AlertComponent,
    AvatarComponent,
    CheckboxComponent,
    DialogComponent,
    InputComponent,
    RadioComponent,
    SelectComponent,
    TextareaComponent,
    TypographyComponent
  ]
})
export class DocsModule { }
