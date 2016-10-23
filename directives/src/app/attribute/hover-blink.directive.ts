import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[blink]'
})
export class HoverBlinkDirective {
  private reference: number;
  private visible: boolean;
  private revertColor: string;

  @Input()
  public delay: number;

  @Input()
  public color: string;

  public constructor(private el: ElementRef, private renderer: Renderer) {
    this.delay = 1000;
    this.color = 'red';
    this.visible = false;
    this.revertColor = el.nativeElement.style.backgroundColor;
  }

  @HostListener('mouseenter')
  public onMouseEnter() {
    this.reference = window.setInterval(() => {
      const value = this.visible ? this.revertColor : this.color;
      this.visible = !this.visible;
      this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', value);
    }, this.delay);
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    window.clearInterval(this.reference);
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', this.revertColor);
  }

}
