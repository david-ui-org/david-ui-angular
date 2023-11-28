import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  public importCode = ` import { DUIButton } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUIButton],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;
  buttonCode = ` <!-- Use DUI Button in html file -->
  <dui-button size="md" color="gray"> Button </dui-button>
  `;

  buttonBlockCode = ` <!-- Use DUI Button in html file -->
  <dui-button size="md" class="w-full" [fullWidth]="true" color="gray">
  Button
  </dui-button>
  `;

  outlinedButton = `<!-- Use DUI Button in html file -->
  <dui-button size="md" variant="filled" color="gray">Filled</dui-button>
  <dui-button size="md" variant="outlined" color="gray">Outlined</dui-button>
  <dui-button size="md" variant="text" color="gray">Text</dui-button>
  <dui-button size="md" variant="gradient" color="gray">Gradient</dui-button>
  `;

  buttonSizeCode = ` <!-- Use DUI Button in html file -->
  <dui-button size="sm" color="gray">Button</dui-button>
  <dui-button size="md" color="gray">Button</dui-button>
  <dui-button size="lg" color="gray">Button</dui-button>
  `;
  buttonColorCode = ` <!-- Use DUI Button in html file -->
  <dui-button size="md" color="gray">Button</dui-button>
  <dui-button size="md" color="blue">Button</dui-button>
  <dui-button size="md" color="red">Button</dui-button>
  <dui-button size="md" color="green">Button</dui-button>
  `;
  roundedButtons: string = ` <dui-button size="md" variant="filled" color="gray" [rounded]="true" >Filled</dui-button>
  <dui-button size="md" variant="outlined" color="gray" [rounded]="true">Outlined</dui-button>
  <dui-button size="md" variant="text" color="gray" [rounded]="true">Text</dui-button>
  <dui-button size="md" variant="gradient" color="gray" [rounded]="true"
    >Gradient</dui-button>`;
  iconButtons: string = `
  <div class="flex items-center gap-4">
  <dui-button size="md" className="flex items-center gap-3" color="gray">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth=2
    stroke="currentColor"
    class="h-5 w-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
    />
  </svg>
  Add to Bookmark
  </dui-button>
  <dui-button size="md" className="flex items-center gap-3" color="gray" variant="gradient">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth=2
      stroke="currentColor"
      class="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
      />
    </svg>
    Upload Files
  </dui-button>
  <dui-button size="md" className="flex items-center gap-3" color="gray" variant="outlined">
    Refresh
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth=2
      stroke="currentColor"
      class="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  </dui-button>

  <dui-button size="md" className="flex items-center gap-2" color="gray" variant="text">
    Read More
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  </dui-button>
  </div>
`;
rippleEffectButton: string = ` <dui-button color="gray" [ripple]="true" >
  RIPPLE EFFECT ON
  </dui-button>
  <dui-button color="gray" [ripple]="false"> 
  RIPPLE EFFECT OFF
  </dui-button>`;
}
