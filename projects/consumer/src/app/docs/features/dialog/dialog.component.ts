import { Component } from '@angular/core';
import { Property } from '../../../shared/model/property.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  importCode: string = ` import { DUIDialog } from "david-ui-angular";

  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DUIDialog],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}`;
  dialogCode: string = ` 
  <dui-dialog [open]="openDialog" [closeOnBackground]="true" (onClose)="this.openDialog = !this.openDialog">
        <dui-dialog-header>
          Its a simple dialog.
        </dui-dialog-header>
        <dui-dialog-body>
          The key to more
          success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty
          five years of blood sweat and tears, and I'm never giving up, I'm just getting started. I'm up to something.
          Fan
          luv.
        </dui-dialog-body>
        <dui-dialog-footer>
          <dui-button class="mr-2" size="md" variant="text" color="red" [rounded]="false" (click)="OpenDialog()">CANCEL</dui-button>
          <dui-button size="md" color="green" (click)="OpenDialog()">CONFIRM</dui-button>
        </dui-dialog-footer>
      </dui-dialog>`;

  dialogSizeCode: string = ` 
  <div class="grid grid-cols-3  gap-2 justify-items-center">
    <dui-button color="gray" (click)="OpenDialogSize('xs')">
      Open Dialog XS
    </dui-button>
    <dui-button color="gray" (click)="OpenDialogSize('sm')">
      Open Dialog SM
    </dui-button>
    <dui-button color="gray" (click)="OpenDialogSize('md')">
      Open Dialog MD
    </dui-button>
    <dui-button color="gray" (click)="OpenDialogSize('lg')">
      Open Dialog LG
    </dui-button>
    <dui-button color="gray" (click)="OpenDialogSize('xl')">
      Open Dialog XL
    </dui-button>
    <dui-button color="gray" (click)="OpenDialogSize('xxl')">
      Open Dialog XXL
    </dui-button>
    
  </div>


  <dui-dialog [open]="openDialogXS" size="xs">
    <dui-dialog-header>
      Its a simple dialog.
    </dui-dialog-header>
    <dui-dialog-body>
      The key to more
      success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty
      five years of blood sweat and tears, and I'm never giving up, I'm just getting started. I'm up to something.
      Fan
      luv.
    </dui-dialog-body>
    <dui-dialog-footer>
      <dui-button class="mr-2" size="md" variant="text" color="red" [rounded]="false" (click)="OpenDialogSize('xs')">CANCEL</dui-button>
      <dui-button size="md" color="green" (click)="OpenDialogSize('xs')">CONFIRM</dui-button>
    </dui-dialog-footer>
  </dui-dialog>

  <dui-dialog [open]="openDialogSM" size="sm">
    <dui-dialog-header>
      Its a simple dialog.
    </dui-dialog-header>
    <dui-dialog-body>
      The key to more
      success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty
      five years of blood sweat and tears, and I'm never giving up, I'm just getting started. I'm up to something.
      Fan
      luv.
    </dui-dialog-body>
    <dui-dialog-footer>
      <dui-button class="mr-2" size="md" variant="text" color="red" [rounded]="false" (click)="OpenDialogSize('sm')">CANCEL</dui-button>
      <dui-button size="md" color="green" (click)="OpenDialogSize('sm')">CONFIRM</dui-button>
    </dui-dialog-footer>
  </dui-dialog>

  <dui-dialog [open]="openDialogMD" size="md">
    <dui-dialog-header>
      Its a simple dialog.
    </dui-dialog-header>
    <dui-dialog-body>
      The key to more
      success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty
      five years of blood sweat and tears, and I'm never giving up, I'm just getting started. I'm up to something.
      Fan
      luv.
    </dui-dialog-body>
    <dui-dialog-footer>
      <dui-button class="mr-2" size="md" variant="text" color="red" [rounded]="false" (click)="OpenDialogSize('md')">CANCEL</dui-button>
      <dui-button size="md" color="green" (click)="OpenDialogSize('md')">CONFIRM</dui-button>
    </dui-dialog-footer>
  </dui-dialog>

  <dui-dialog [open]="openDialogLG" size="lg">
    <dui-dialog-header>
      Its a simple dialog.
    </dui-dialog-header>
    <dui-dialog-body>
      The key to more
      success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty
      five years of blood sweat and tears, and I'm never giving up, I'm just getting started. I'm up to something.
      Fan
      luv.
    </dui-dialog-body>
    <dui-dialog-footer>
      <dui-button class="mr-2" size="md" variant="text" color="red" [rounded]="false" (click)="OpenDialogSize('lg')">CANCEL</dui-button>
      <dui-button size="md" color="green" (click)="OpenDialogSize('lg')">CONFIRM</dui-button>
    </dui-dialog-footer>
  </dui-dialog>

  <dui-dialog [open]="openDialogXL" size="xl">
      <dui-dialog-header>
        Its a simple dialog.
      </dui-dialog-header>
      <dui-dialog-body>
        The key to more
        success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty
        five years of blood sweat and tears, and I'm never giving up, I'm just getting started. I'm up to something.
        Fan
        luv.
      </dui-dialog-body>
      <dui-dialog-footer>
        <dui-button class="mr-2" size="md" variant="text" color="red" [rounded]="false" (click)="OpenDialogSize('xl')">CANCEL</dui-button>
        <dui-button size="md" color="green" (click)="OpenDialogSize('xl')">CONFIRM</dui-button>
        </dui-dialog-footer>
  </dui-dialog>

  <dui-dialog [open]="openDialogXXl" size="xxl">
    <dui-dialog-header>
      Its a simple dialog.
    </dui-dialog-header>
    <dui-dialog-body>
      The key to more
      success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty
      five years of blood sweat and tears, and I'm never giving up, I'm just getting started. I'm up to something.
      Fan
      luv.
    </dui-dialog-body>
    <dui-dialog-footer>
      <dui-button class="mr-2" size="md" variant="text" color="red" [rounded]="false" (click)="OpenDialogSize('xxl')">CANCEL</dui-button>
      <dui-button size="md" color="green" (click)="OpenDialogSize('xxl')">CONFIRM</dui-button>
    </dui-dialog-footer>
  </dui-dialog>`;

  dialogLongcode: string = ` 
  <div class="flex items-center justify-items-center">
  <dui-button color="gray" (click)="OpenLongDialog()">
    Long Dialog
  </dui-button>

  </div>

  <dui-dialog [open]="openLongDialog" [closeOnBackground]="true" (onClose)="this.openLongDialog = !this.openLongDialog" >
    <dui-dialog-header>
      <dui-typography variant="h2">Long Dialog</dui-typography>
    </dui-dialog-header>
    <dui-dialog-body className="h-[42rem] overflow-scroll">
      <dui-typography variant="paragraph" className="font-normal">
        I&apos;ve always had unwavering confidence in my abilities, and I
        believe our thoughts and self-perception are the primary forces that
        shape us. Many people limit themselves by their own self-doubt,
        slowing their progress. Fortunately, I was raised with the belief
        that I could achieve anything.
        <br />
        <br />
        As we journey through life, we often encounter challenges that
        harden our hearts. Pain, insults, broken trust, and betrayal can
        make us hesitant to help others. Love can lead to heartbreak, and
        time can distance us from family. These experiences can gradually
        erode our optimism.
        <br /> <br />
        Life doesn&apos;t always place us where we want to be. We grow, make
        mistakes, and strive to express ourselves and fulfill our dreams. If
        we&apos;re fortunate enough to participate in life&apos;s journey,
        we should cherish every moment. Regrettably, some only recognize the
        value of a moment after it&apos;s passed.
        <br /> <br />
        One thing I&apos;ve learned is that I can excel at anything I set my
        mind to. My skill is my ability to learn. I&apos;m here to learn, to
        grow, and to inspire others to do the same. Don&apos;t fear making
        mistakes; they teach us far more than compliments ever will.
        Ultimately, what truly matters is how our actions inspire and
        motivate others. Some will be ignited by our endeavors, while others
        may be offended—it&apos;s all part of the process. I'm here to
        pursue my dreams and encourage others to do the same.
        <br /> <br />
        Now is the time to embrace greatness without fear of judgment. Some
        may resent those who shine brightly or stand out, but it&apos;s time
        to be the best version of ourselves. Do you have faith in your
        beliefs, even if you&apos;re the only one who does?
      </dui-typography>
    </dui-dialog-body>
    <dui-dialog-footer>
      <dui-button [rounded]="true" variant="text" color="gray" (click)="OpenLongDialog()">
        Close
      </dui-button>
    </dui-dialog-footer>
  </dui-dialog>`;

  dialogTypeSize: string = ` 
  type size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl"`;

  dialogProperties: Property[] = [
    {
      attribute: 'className',
      type: 'string',
      description: 'Add custom className for dialog',
      default: "''",
    },
    {
      attribute: 'size',
      type: 'boolean',
      description: 'Change dialog size',
      default: 'md',
    },
    {
      attribute: 'open',
      type: 'boolean',
      description: 'Block level dialog',
      default: 'false',
    },
    {
      attribute: 'closeOnBackground',
      type: 'boolean',
      description: 'Rounded dialog',
      default: 'false',
    },
  ];

  dialogBodyProperties: Property[] = [
    {
      attribute: 'className',
      type: 'string',
      description: 'Add custom className for dialog',
      default: "''",
    },
    {
      attribute: 'divider',
      type: 'boolean',
      description: 'Add Divider between header and body',
      default: 'md',
    },
  ];

  private sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

  openDialog: boolean = false;
  openLongDialog: boolean = false;
  openDialogXS: boolean = false;
  openDialogSM: boolean = false;
  openDialogMD: boolean = false;
  openDialogLG: boolean = false;
  openDialogXL: boolean = false;
  openDialogXXL: boolean = false;

  OpenDialog() {
    this.openDialog = !this.openDialog;
  }
  OpenLongDialog() {
    this.openLongDialog = !this.openLongDialog;
  }
  OpenDialogSize(size: string) {
    if (this.sizes.includes(size)) {
      if (size == 'xs') {
        this.openDialogXS = !this.openDialogXS;
      }
      if (size == 'sm') {
        this.openDialogSM = !this.openDialogSM;
      }
      if (size == 'md') {
        this.openDialogMD = !this.openDialogMD;
      }
      if (size == 'lg') {
        this.openDialogLG = !this.openDialogLG;
      }
      if (size == 'xl') {
        this.openDialogXL = !this.openDialogXL;
      }
      if (size == 'xxl') {
        this.openDialogXXL = !this.openDialogXXL;
      }
    }
  }
}
