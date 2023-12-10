
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
          { id: 'accordion-main', label: 'Accordion' },
          { id: 'accordion-icon', label: 'Accordion With Icon' },
          { id: 'accordion-open', label: 'Accordion Always Opened' },
          { id: 'accordion-disable', label: 'Accordion Disabled' },
          { id: 'accordion-properties', label: 'Accordion Properties' },
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
          { id: 'avatar-variant', label: 'Avatar Variant' },
          { id: 'avatar-size', label: 'Avatar Sizes' },
          { id: 'avatar-border', label: 'Avatar with Border' },
          { id: 'avatar-text', label: 'Avatar with Text' },
          { id: 'avatar-stack', label: 'Avatar Stack' },
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
        name: 'Button Group',
        route: '/docs/button-group',
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
          { id: 'checkbox-ripple', label: 'Checkbox Ripple Effect' },
          { id: 'checkbox-icon', label: 'Checkbox Custom Icon' },
          { id: 'checkbox-disabled', label: 'Checkbox Disabled' },
          { id: 'checkbox-link', label: 'Checkbox With Link' },
          { id: 'checkbox-description', label: 'Checkbox With Description' },
        ],
        isActive: false
      },
      {
        name: 'Chip',
        route: '/docs/chip',
        scrollSpyElements: [
          { id: 'chip-main', label: 'Chip' },
          { id: 'chip-variants', label: 'Chip Variant' },
          { id: 'chip-sizes', label: 'Chip Size' },
          { id: 'chip-colors', label: 'Chip Colors' },
          { id: 'chip-pills', label: 'Chip Pills' },
          { id: 'chip-icon', label: 'Chip Icon' },
        ],
        isActive: false
      },
      {
        name: 'Collapse',
        route: '/docs/collapse',
        scrollSpyElements: [
          { id: 'checkbox-main', label: 'Checkbox' },
        ],
        isActive:false
        },
        
      {
        name: 'Dialog',
        route: '/docs/dialog',
        scrollSpyElements: [
          { id: 'dialog-main', label: 'Dialog' },
          { id: 'dialog-size', label: 'Dialog Sizes' },
          { id: 'dialog-long', label: 'Long Dialog' },

        ],
        isActive: false
      },
      {
        name: 'Icon Button',
        route: '/docs/icon-button',
        scrollSpyElements: [
          { id: 'icon-button-main', label: 'Button' },
          { id: 'icon-button-variant', label: 'Icon Button Variant' },
          { id: 'icon-button-size', label: 'Icon Button Sizes' },
          { id: 'icon-button-colors', label: 'Icon Button Colors' },
          { id: 'icon-button-rounded', label: 'Icon Rounded Button' },
          { id: 'icon-button-ripple', label: 'Icon Buttons Ripple Effect' },
        ],
        isActive: true
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
        name: 'Pagination',
        route: '/docs/pagination',
        scrollSpyElements: [
          { id: 'pagination-main', label: 'Pagination' },
          { id: 'pagination-simple', label: 'Pagination Simple' },
          { id: 'pagination-standard', label: 'Pagination Standard' },
          { id: 'pagination-circular', label: 'Pagination Circular' },
          { id: 'pagination-option', label: 'Pagination Options' },

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
          { id: 'select-variant', label: 'Select Variant' },
          { id: 'select-size', label: 'Select Size' },
          { id: 'select-colors', label: 'Select Color' },
          { id: 'select-disabled', label: 'Select Disabled' },
        ],
        isActive: false
      },
      {
        name: 'Switch',
        route: '/docs/switch',
        scrollSpyElements: [
          { id: 'switch-main', label: 'Switch' },
          { id: 'switch-colors', label: 'Switch Colors' },
          { id: 'switch-label', label: 'Switch Label' },
          { id: 'switch-ripple', label: 'Switch Ripple Effect' },
          { id: 'switch-disabled', label: 'Switch Disabled' },
        ],
        isActive: false
      },
      {
        name: 'Slider',
        route: '/docs/slider',
        scrollSpyElements: [
          { id: 'slider-main', label: 'Slider' },
          { id: 'slider-size', label: 'Slider Size' },
          { id: 'slider-color', label: 'Slider Colors' },
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