import { Component } from '@angular/core';

@Component({
  selector: 'singleSlot',
  template: `
    <div style="border: 3px solid red;">
      <ng-content></ng-content>
    </div>
`
})
export class SingleSlotComponent {

}
