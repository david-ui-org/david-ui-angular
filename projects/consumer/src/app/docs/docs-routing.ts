import { Routes } from '@angular/router';
import { AccordionComponent } from './features/accordion/accordion.component';
import { ButtonComponent } from './features/button/button.component';
import { InstallationComponent } from './pages/installation/installation.component';
import { LicenseComponent } from './pages/license/license.component';
import { AboutTailwindComponent } from './pages/about-tailwind/about-tailwind.component';
import { ReleaseNotesComponent } from './pages/release-notes/release-notes.component';
import { AlertComponent } from './features/alert/alert.component';
import { AvatarComponent } from './features/avatar/avatar.component';
import { CheckboxComponent } from './features/checkbox/checkbox.component';
import { DialogComponent } from './features/dialog/dialog.component';
import { SelectComponent } from './features/select/select.component';
import { InputComponent } from './features/input/input.component';
import { RadioComponent } from './features/radio/radio.component';
import { TextareaComponent } from './features/textarea/textarea.component';
import { TypographyComponent } from './features/typography/typography.component';
import { AboutAngularComponent } from './pages/about-angular/about-angular.component';
import { ThemingComponent } from './pages/theming/theming.component';
import { ColorsComponent } from './pages/colors/colors.component';
import { FontsComponent } from './pages/fonts/fonts.component';
import { CollapseComponent } from './features/collapse/collapse.component';
import { ChipComponent } from './features/chip/chip.component';
import { SwitchComponent } from './features/switch/switch.component';
import { SliderComponent } from './features/slider/slider.component';
import { ButtonGroupComponent } from './features/button-group/button-group.component';
import { IconbuttonComponent } from './features/iconbutton/icon-button.component';
import { PaginationComponent } from './features/pagination/pagination.component';
import { BreadcrumbComponent } from './features/breadcrumb/breadcrumb.component';

export const routes: Routes = [
  { path: '', redirectTo: '/docs/installation', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'installation',
        component: InstallationComponent,
        data: {
          title: 'Installation - David UI Angular',
          meta: [
            {
              name: 'description',
              content: 'Learn how to install David-UI in your Angular project.',
            },
            {
              name: 'title',
              content: 'Installation - David UI Angular',
            },
          ],
        },
      },
      {
        path: 'license',
        component: LicenseComponent,
        data: {
          title: 'David-UI License',
          meta: [
            {
              name: 'description',
              content: 'View the licensing information for David-UI.',
            },
            {
              name: 'title',
              content: 'David-UI License',
            },
          ],
        },
      },
      {
        path: 'what-is-tailwind-css',
        component: AboutTailwindComponent,
        data: {
          title: 'David-UI and Tailwind CSS',
          meta: [
            {
              name: 'description',
              content:
                'Learn about the integration of David-UI with Tailwind CSS.',
            },
            {
              name: 'title',
              content: 'David-UI and Tailwind CSS',
            },
          ],
        },
      },
      {
        path: 'what-is-angular',
        component: AboutAngularComponent,
        data: {
          title: 'David-UI and Angular',
          meta: [
            {
              name: 'description',
              content: 'Learn about the integration of David-UI with Angular.',
            },
            {
              name: 'title',
              content: 'David-UI and Angular',
            },
          ],
        },
      },
      {
        path: 'release-notes',
        component: ReleaseNotesComponent,
        data: {
          title: 'David-UI Release Notes',
          meta: [
            {
              name: 'description',
              content: 'Check out the release notes for David-UI.',
            },
            {
              name: 'title',
              content: 'David-UI Release Notes',
            },
          ],
        },
      },
      {
        path: 'theming',
        component: ThemingComponent,
        data: {
          title: 'David-UI Angular Theming',
          meta: [
            {
              name: 'description',
              content:
                'Learn how to customize the look and feel of David-UI Angular.',
            },
            {
              name: 'title',
              content: 'David-UI Angular Theming',
            },
          ],
        },
      },
      {
        path: 'colors',
        component: ColorsComponent,
        data: {
          title: 'David-UI Angular Colors',
          meta: [
            {
              name: 'description',
              content: 'Learn how to customize the colors of David-UI Angular.',
            },
            {
              name: 'title',
              content: 'David-UI Angular Colors',
            },
          ],
        },
      },
      {
        path: 'fonts',
        component: FontsComponent,
        data: {
          title: 'David-UI Angular Fonts',
          meta: [
            {
              name: 'description',
              content: 'Learn how to customize the fonts of David-UI Angular.',
            },
            {
              name: 'title',
              content: 'David-UI Angular Fonts',
            },
          ],
        },
      },
      {
        path: 'breadcrumb',
        component: BreadcrumbComponent,
        data: {
          title: 'Tailwind CSS Breadcrumb with Angular - David UI',
          meta: [
            {
              name: 'description',
              content:
                'Use our Tailwind CSS Breadcrumb example built for Angular to enable user actions on your website. Customize the component or add it directly to your project.',
            },
            {
              name: 'title',
              content: 'Tailwind CSS Breadcrumb with Angular - David UI',
            },
          ],
        },
      },
      {
        path: 'button',
        component: ButtonComponent,
        data: {
          title: 'Tailwind CSS Button with Angular - David UI',
          meta: [
            {
              name: 'description',
              content:
                'Use our Tailwind CSS Button example built for Angular to enable user actions on your website. Customize the component or add it directly to your project.',
            },
            {
              name: 'title',
              content: 'Tailwind CSS Button with Angular - David UI',
            },
          ],
        },
      },
      {
        path: 'button-group',
        component: ButtonGroupComponent,
        data: {
          title: 'Tailwind CSS Button Group with Angular - David UI',
          meta: [
            {
              name: 'description',
              content:
                'Use our Tailwind CSS Button Group example built for Angular to enable user actions on your website. Customize the component or add it directly to your project.',
            },
            {
              name: 'title',
              content: 'Tailwind CSS Button Group with Angular - David UI',
            },
          ],
        },
      },
      {
        path: 'accordion',
        component: AccordionComponent,
        data: {
          title: 'Tailwind CSS Accordion with Angular - David UI',
          meta: [
            {
              name: 'description',
              content:
                'Use our Tailwind CSS Accordion example built for Angular to organize large amounts of content. Customize the component or add it directly to your project.',
            },
            {
              name: 'title',
              content: 'Tailwind CSS Accordion with Angular - David UI',
            },
          ],
        },
      },
      {
        path: 'alert',
        component: AlertComponent,
        data: {
          title: 'Tailwind CSS Alert with Angular - David UI',
          meta: [
            {
              name: 'description',
              content:
                'Use our Tailwind CSS Alert example built for Angular to notify users about important information. Customize the component or add it directly to your project.',
            },
            {
              name: 'title',
              content: 'Tailwind CSS Alert with Angular - David UI',
            },
          ],
        },
      },
      {
        path: 'avatar',
        component: AvatarComponent,
        data: {
          title: 'Tailwind CSS Avatar with Angular - David UI',
          meta: [
            {
              name: 'description',
              content:
                'Use our Tailwind CSS Avatar example built for Angular to represent users or entities on your website. Customize the component or add it directly to your project.',
            },
            {
              name: 'title',
              content: 'Tailwind CSS Avatar with Angular - David UI',
            },
          ],
        },
      },
      {
        path: 'checkbox',
        component: CheckboxComponent,
        data: {
          title: 'Tailwind CSS Checkbox with Angular - David UI',
          meta: [
            {
              name: 'description',
              content:
                'Learn how to create checkboxes using Tailwind CSS in David-UI.',
            },
            {
              name: 'title',
              content: 'Tailwind CSS Checkbox with Angular - David UI',
            },
          ],
        },
      },
      {
        path: 'dialog',
        component: DialogComponent,
        data: {
          title: 'Tailwind CSS Dialog with Angular - David UI',
          meta: [
            {
              name: 'description',
              content:
                'Use our Tailwind CSS Dialog example built for Angular to show important information. Customize the component or add it directly to your project.',
            },
            {
              name: 'title',
              content: 'Tailwind CSS Dialog with Angular - David UI',
            },
          ],
        },
      },
      {
        path: 'icon-button',
        component: IconbuttonComponent,
        data: {
          title: 'Tailwind CSS Icon Button with Angular - David UI',
          meta: [
            {
              name: 'description',
              content:
                'Use our Tailwind CSS Icon Button example built for Angular to enable user actions on your website. Customize the component or add it directly to your project.',
            },
            {
              name: 'title',
              content: 'Tailwind CSS Icon Button with Angular - David UI',
            },
          ],
        },
      },
      {
        path: 'select',
        component: SelectComponent,
        data: {
          title: 'Tailwind CSS Select with Angular - David UI',
          meta: [
            {
              name: 'description',
              content:
                'Use our Tailwind CSS Select example built for Angular to provide a dropdown menu of options. Customize the component or add it directly to your project.',
            },
            {
              name: 'title',
              content: 'Tailwind CSS Select with Angular - David UI',
            },
          ],
        },
      },
      {
        path: 'switch',
        component: SwitchComponent,
        data: {
          title: 'Tailwind CSS Switch with Angular - David UI',
          meta: [
            {
              name: 'description',
              content:
                'Use our Tailwind CSS Switch example built for Angular to provide a toggle.',
            },
            {
              name: 'title',
              content: 'Tailwind CSS Switch with Angular - David UI',
            },
          ],
        },
      },
      {
        path: 'slider',
        component: SliderComponent,
        data: {
          title: 'Tailwind CSS Slider with Angular - David UI',
          meta: [
            {
              name: 'description',
              content: 'Use our Tailwind CSS Slider example built for Angular',
            },
            {
              name: 'title',
              content: 'Tailwind CSS Slider with Angular - David UI',
            },
          ],
        },
      },
      {
        path: 'input',
        component: InputComponent,
        title: 'Tailwind CSS Input with Angular - David UI',
        data: {
          meta: [
            {
              name: 'description',
              content:
                'Use our Tailwind CSS Input example built for Angular to collect and process user data. Customize the component or add it directly to your project.',
            },
            {
              name: 'title',
              content: 'Tailwind CSS Input with Angular - David UI',
            },
          ],
        },
      },
      {
        path: 'pagination',
        component: PaginationComponent,
        title: 'Tailwind CSS Pagination with Angular - David UI',
        data: {
          meta: [
            {
              name: 'description',
              content:
                'Use our Tailwind CSS Pagination.',
            },
            {
              name: 'title',
              content: 'Tailwind CSS Pagination with Angular - David UI',
            },
          ],
        },
      },
      {
        path: 'radiobutton',
        component: RadioComponent,
        title: 'Tailwind CSS Radio Button with Angular - David UI',
        data: {
          meta: [
            {
              name: 'description',
              content:
                'Use our Tailwind CSS Radio Button example built for Angular to ensure single-option selections on your website. Customize the component or add it directly to your project.',
            },
            {
              name: 'title',
              content: 'Tailwind CSS Radio Button with Angular - David UI',
            },
          ],
        },
      },
      {
        path: 'textarea',
        component: TextareaComponent,
        data: {
          title: 'Tailwind CSS Textarea with Angular - David UI',
          meta: [
            {
              name: 'description',
              content:
                'Use our Tailwind CSS Textarea example built for Angular to capture extensive user input on your website. Customize the component or add it directly to your project.',
            },
            {
              name: 'title',
              content: 'Tailwind CSS Textarea with Angular - David UI',
            },
          ],
        },
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Tailwind CSS Typography with Angular - David UI',
          meta: [
            {
              name: 'description',
              content:
                'Use our Tailwind CSS Typography example built for Angular to maintain consistency in the display and styling of text. Customize the component or add it directly to your project.',
            },
            {
              name: 'title',
              content: 'Tailwind CSS Typography with Angular - David UI',
            },
          ],
        },
      },
      {
        path: 'chip',
        component: ChipComponent,
        data: {
          title: 'Tailwind CSS Chip with Angular - David UI',
          meta: [
            {
              name: 'description',
              content:
                'David UI is a components library that features multiple Angular components, all written with Tailwind CSS classes and David UI guidelines.',
            },
            {
              name: 'title',
              content: 'Tailwind CSS Typography with Angular - David UI',
            },
          ],
        },
      },
      {
        path: 'collapse',
        component: CollapseComponent,
        data: {
          title: 'Tailwind CSS Collapse with Angular - David UI',
          meta: [
            {
              name: "description",
              content: 'Use our Tailwind CSS Collapse example built for Angular to maintain consistency in the project.'
            },
            {
              name: "title",
              content: 'Tailwind CSS Collapse with Angular - David UI'
            }
          ]
        }
      },
    ],
  },
];
