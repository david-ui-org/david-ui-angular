
// ScrollSpyElement model
export interface ScrollSpyElement {
  id: string;
  label: string;
}

// SidebarItem model with an additional property
export interface SidebarItem {
  name: string;
  route: string;
  scrollSpyElements?: ScrollSpyElement[] | null;
  isActive: boolean; // New property to indicate active state
  parent?: SidebarItem | null; // Nullable parent
  children?: SidebarItem[] | null; // Nullable children
}

export const SidebarData: SidebarItem[] = [
  {
    name: 'Getting Started',
    route: '',
    children: [
      {
        name: 'Installation',
        route: '/docs/installation',
        scrollSpyElements: [
          { id: 'main', label: 'Overview' },
          { id: 'installation', label: 'Package Installation' },
          { id: 'get-started', label: 'Get Started' },
          { id: 'installation-styles', label: 'Import Styles' },
          { id: 'import-module', label: 'Import Module' },
          { id: 'tailwind-config', label: 'Tailwind Config' },

        ],
        isActive: false
      },
      {
        name: 'LICENSE',
        route: 'docs/license',
        isActive: false
      },
      {
        name: 'What is Tailwind CSS',
        route: 'docs/what-is-tailwind-css',
        isActive: false
      }
    ],
    isActive: false
  },
  {
    name: 'Customization',
    route: '',
    children: [
      {
        name: 'Theming',
        route: 'docs/theming',
        scrollSpyElements: [
          { id: 'theming-colors', label: 'Colors' },
          { id: 'theming-styles', label: 'Styles' }
        ],
        isActive: false
      },
      {
        name: 'Colors',
        route: 'docs/colors',
        scrollSpyElements: [
          { id: 'color-palette', label: 'Palette' },
          { id: 'color-picker', label: 'Picker' }
        ],
        isActive: false
      },
      {
        name: 'Fonts',
        route: 'docs/fonts',
        scrollSpyElements: [
          { id: 'font-styles', label: 'Styles' },
          { id: 'font-sizes', label: 'Sizes' }
        ],
        isActive: false
      }
    ],
    isActive: false
  },
  {
    name: 'Components',
    route: '',
    children: [
      {
        name: 'Accordion',
        route: '/docs/accordion',
        scrollSpyElements: [
          { id: 'accordion-main', label: 'Accordion Declaration' },
          { id: 'accordion-icon', label: 'Accordion With Icon' },
        ],
        isActive: false
      },
      {
        name: 'Alert',
        route: '/docs/alert',
        scrollSpyElements: [
          { id: 'alert-main', label: 'Alert' },
          { id: 'alert-primary', label: 'Alert Primary' },
          { id: 'alert-variants', label: 'Alert Variants' },
          { id: 'alert-color', label: 'Alert Colors' },
          { id: 'alert-dismissible', label: 'Alert Dismissible' },
          { id: 'alert-icon', label: 'Alert Custom Icon' },
        ],
        isActive: false
      },
      {
        name: 'Avatar',
        route: '/docs/avatar',
        scrollSpyElements: [
          { id: 'avatar-main', label: 'Avatar' },
          { id: 'avatar-size', label: 'Avatar Sizes' },
        ],
        isActive: false
      },
      {
        name: 'Button',
        route: '/docs/button',
        scrollSpyElements: [
          { id: 'button-main', label: 'Button' },
          { id: 'button-variant', label: 'Button Variant' },
          { id: 'button-size', label: 'Button Sizes' },
          { id: 'button-colors', label: 'Button Colors' },
          { id: 'button-icon', label: 'Button with Icons' },
          { id: 'button-block', label: 'Block Level Button' },
          { id: 'button-rounded', label: 'Rounded Button' },
          { id: 'button-ripple', label: 'Buttons Ripple Effect' },
        ],
        isActive: true
      },
      {
        name: 'Checkbox',
        route: '/docs/checkbox',
        scrollSpyElements: [
          { id: 'checkbox-main', label: 'Checkbox' },
          { id: 'checkbox-colors', label: 'Checkbox Colors' },
          { id: 'checkbox-label', label: 'Checkbox Label' },
          { id: 'checkbox-disabled', label: 'Checkbox Disabled' },
        ],
        isActive: false
      },
      {
        name: 'Collapse',
        route: '/docs/collapse',
        scrollSpyElements: [
          { id: 'checkbox-main', label: 'Checkbox' },
        ],
        isActive: false
      },
      {
        name: 'Dialog',
        route: '/docs/dialog',
        scrollSpyElements: [
          { id: 'dialog-main', label: 'Dialog' },

        ],
        isActive: false
      },
      {
        name: 'Input',
        route: '/docs/input',
        scrollSpyElements: [
          { id: 'input-main', label: 'Input' },
          { id: 'input-variants', label: 'Input Variants' },
          { id: 'input-sizes', label: 'Input Sizes' },
          { id: 'input-colors', label: 'Input Colors' },
        ],
        isActive: false
      },
      {
        name: 'Radio Button',
        route: '/docs/radiobutton',
        scrollSpyElements: [
          { id: 'radio-main', label: 'Radio Button' },
          { id: 'radio-disabled', label: 'Radio Button Disabled' },
          { id: 'radio-label', label: 'Radio Button Label' },
          { id: 'radio-colors', label: 'Radio Button Colors' },
        ],
        isActive: false
      },
      {
        name: 'Select',
        route: '/docs/select',
        scrollSpyElements: [
          { id: 'select-main', label: 'Select' },
        ],
        isActive: false
      },
      {
        name: 'Text area',
        route: '/docs/textarea',
        scrollSpyElements: [
          { id: 'textarea-main', label: 'Textarea' },
          { id: 'textarea-disabled', label: 'Textarea Disabled'},
          { id: 'textarea-variants', label: 'Textarea Variants' },
          { id: 'textarea-sizes', label: 'Textarea Sizes' },
          { id: 'textarea-colors', label: 'Textarea Colors' },
        ],
        isActive: false
      },
      {
        name: 'Typography',
        route: '/docs/typography',
        scrollSpyElements: [
          { id: 'typography-main', label: 'Typography' },
          { id: 'typography-colors', label: 'Typography Colors' },
        ],
        isActive: false
      }
    ],
    isActive: false
  }
];