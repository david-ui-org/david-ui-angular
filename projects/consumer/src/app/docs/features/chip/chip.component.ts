import { Component } from '@angular/core';
import { Property } from '../../../shared/model/property.model';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent {
  importCode: string = ` import { DUIChip } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUIChip],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;

  chipCode: string = `
  <dui-chip>Chip</dui-chip>
  `;

  chipVariantCode: string = `
  <dui-chip variant="filled" >Chip Filled</dui-chip>
  <dui-chip variant="outlined" >Chip Outlined</dui-chip>
  <dui-chip variant="gradient" >Chip Gradient</dui-chip>
  <dui-chip variant="ghost" >Chip Ghost</dui-chip>
  `;

  chipSizeCode: string = `
  <dui-chip size="sm" >Chip Filled</dui-chip>
  <dui-chip size="md" >Chip Filled</dui-chip>
  <dui-chip size="lg" >Chip Filled</dui-chip>
  `;

  chipColorCode: string = `
  <dui-chip color="red">Chip</dui-chip>
  <dui-chip color="yellow">Chip</dui-chip>
  <dui-chip color="green">Chip</dui-chip>
  <dui-chip color="pink">Chip</dui-chip>
  <dui-chip color="purple">Chip</dui-chip>
  `;

  chipPillCode: string = `
  <dui-chip variant="filled" className="rounded-full">Chip Filled</dui-chip>
  <dui-chip variant="outlined" className="rounded-full" >Chip Outlined</dui-chip>
  <dui-chip variant="gradient" className="rounded-full" >Chip Gradient</dui-chip>
  <dui-chip variant="ghost" className="rounded-full" >Chip Ghost</dui-chip>
  `;

  chipIconCode: string = `
    <dui-chip color="gray" variant="filled" [hasIcon]="true" >
      <dui-icon>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="h-5 w-5"
      >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clipRule="evenodd"
          />
        </svg>
        </dui-icon>
          Account
    </dui-chip>
    <dui-chip color="gray" variant="gradient" [hasIcon]="true"  >
        <dui-icon>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clipRule="evenodd"
          />
        </svg>
        </dui-icon>
        Account
    </dui-chip>
    <dui-chip color="gray" variant="outlined" [hasIcon]="true"  >
        <dui-icon>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clipRule="evenodd"
          />
        </svg>
        </dui-icon>
        Account
    </dui-chip>
    <dui-chip color="gray" variant="ghost" [hasIcon]="true"  >
        <dui-icon>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clipRule="evenodd"
          />
        </svg>
        </dui-icon>
        Account
    </dui-chip>
  `;

  chipTypeVariant: string = ` 
  type variant = "filled" | "gradient" | "outlined" | "ghost"`;
  chipTypeSize: string = ` 
  type size = 'sm' | 'md' | 'lg';`;
  chipTypeColor: string = ` type colors =
  | "blue-gray"
  | "gray"
  | "brown"
  | "deep-orange"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "light-green"
  | "green"
  | "teal"
  | "cyan"
  | "light-blue"
  | "blue"
  | "indigo"
  | "deep-purple"
  | "purple"
  | "pink"
  | "red";`;

  chipProperties: Property[] = [
    {
      attribute: 'variant',
      type: 'Variant',
      description: 'change chip variant',
      default: 'filled',
    },
    {
      attribute: 'color',
      type: 'Color',
      description: 'change chip color',
      default: 'gray',
    },
    {
      attribute: 'className',
      type: 'string',
      description: 'Add custom className for chip',
      default: "''",
    },
    {
      attribute: 'size',
      type: 'boolean',
      description: 'Change chip size',
      default: 'md',
    },
    {
      attribute: 'isDismissible',
      type: 'boolean',
      description: 'Dismissible flag for chip',
      default: 'false',
    },
    {
      attribute: 'hasIcon',
      type: 'boolean',
      description: 'Icon flag for chip',
      default: 'false',
    },
    {
      attribute: '<dui-icon>',
      type: 'content',
      description: 'Add Icon content inside dui-icon tag to use icon in chip',
      default: 'false',
    },
  ];
}
