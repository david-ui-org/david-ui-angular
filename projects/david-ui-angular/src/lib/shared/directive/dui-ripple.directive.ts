import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dui-ripple]',
  standalone: true,
})
export class DuiRipple {

  @Input({alias: 'ripple-theme'}) theme! : 'dark' | 'light';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    const ripple = this.renderer.createElement('div');
    const rect = this.el.nativeElement.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    this.renderer.setStyle(this.el.nativeElement,'position','relative')
    this.renderer.setStyle(this.el.nativeElement,'overflow','hidden')

    this.renderer.addClass(ripple, 'ripple');

    this.renderer.setStyle(ripple, 'width', `${size}px`);
    this.renderer.setStyle(ripple, 'height', `${size}px`);
    this.renderer.setStyle(ripple, 'top', `${y}px`);
    this.renderer.setStyle(ripple, 'left', `${x}px`);
    this.renderer.setStyle(ripple, 'position', `absolute`);
    this.renderer.setStyle(ripple, 'pointerEvents', `none`);
    this.renderer.setStyle(ripple, 'borderRadius', `50%`);

    let bgColor = this.theme === 'dark' ? 'rgba(0,0,0, 0.2)': 'rgba(255,255,255, 0.3)';
    this.renderer.setStyle(ripple, 'backgroundColor', `${bgColor}`);


    this.renderer.appendChild(this.el.nativeElement, ripple);

    setTimeout(() => {
      this.renderer.removeChild(this.el.nativeElement, ripple);
    }, 1000);
  }
}
