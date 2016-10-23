import { Directive, Input } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[unless]' })
export class UnlessDirective {

  public constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef) {

  }

  @Input() set unless(condition: boolean) {
    if (!condition) {
      this.container.createEmbeddedView(this.template);
    } else {
      this.container.clear();
    }
  }
}
