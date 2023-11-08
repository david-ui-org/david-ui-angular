import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal, TemplatePortal } from '@angular/cdk/portal';
import { Component, ContentChild, HostListener, Input, ViewChild } from '@angular/core';
import { OptionsComponent } from '../../../components/select/options/options.component';
import { DuiSelectService } from '../../../services/select/dui-select.service';

@Component({
  selector: 'dui-dropdown',
  template: ` 
  <ng-template cdkPortal #testTemplate="cdkPortal">
    <ng-content #content></ng-content>
  </ng-template>`,
  styleUrls: ['./cdk-dropdown.component.scss'],
})
export class CdkDropdownComponent {

  @Input()
  public reference!: HTMLElement;

  @ViewChild('testTemplate')
  public contentTemplate!: TemplatePortal<any>;

  @ContentChild('#content') public content! : OptionsComponent;

  protected overlayRef!: OverlayRef;

  public showing = false;

  constructor(protected overlay: Overlay,private dropdownService: DuiSelectService) {
  }

  public show() : boolean{
   this.overlayRef = this.overlay.create(this.getOverlayConfig());
    this.overlayRef.attach(this.contentTemplate);
    this.syncWidth();
    this.overlayRef.backdropClick().subscribe(() => this.hide());
    this.showing = true;

    return this.showing;
  }

  public hide() {
    this.overlayRef.detach();
    this.showing = false;
    this.dropdownService.shouldClosed(this.showing);
  }

  @HostListener('window:resize')
  public onWinResize() {
    this.syncWidth();
  }

  protected getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.reference)
      .withPush(false)
      .withLockedPosition(true)
      .withPositions([{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
      }]);

    const scrollStrategy = this.overlay.scrollStrategies.reposition();

    return new OverlayConfig({
      positionStrategy: positionStrategy,
      scrollStrategy: scrollStrategy,
      hasBackdrop: true,
      panelClass:'custom-overlay-class',
      backdropClass: 'cdk-overlay-transparent-backdrop'
    });
  }

  private syncWidth() {
    if (!this.overlayRef) {
      return;
    }

    const refRect = this.reference.getBoundingClientRect();
    this.overlayRef.updateSize({ width: refRect.width });
  }

}
