import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[pricing]'
})
export class PricingDirective {

  public constructor(private el: ElementRef, private renderer: Renderer) {
  }

  @Input()
  public set pricing(pricing: number) {
    let color: string;
    if (pricing < 100) {
      color = 'green';
    } else if (pricing > 99 && pricing < 200) {
      color = 'yellow';
    } else {
      color = 'red';
    }
    this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
  };
}
