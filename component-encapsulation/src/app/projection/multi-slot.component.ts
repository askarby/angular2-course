import { Component } from '@angular/core';

@Component({
  selector: 'multiSlot',
  template: `
    <div>
      <div><ng-content select="header"></ng-content></div>
      <div>This is the content</div>
      <div><ng-content select="footer"></ng-content></div>
    </div>
`
})
export class MultiSlotComponent {

}
