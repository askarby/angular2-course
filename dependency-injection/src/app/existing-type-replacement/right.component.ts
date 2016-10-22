import { Component, OnInit } from '@angular/core';
import { CounterService } from "../shared/counter.service";
import { DoubleCounterService } from "../shared/double-counter.service";

@Component({
  providers: [
    { provide: DoubleCounterService, useExisting: CounterService }
  ],
  selector: 'app-right',
  template: `
    <div class="row">
      <h3>useExisting</h3>
      <p>
        Værdien er: {{counter.getCount()}}<br>
        <button (click)="counter.increment()">Tæl op</button>
      </p>
    </div>
  `
})
export class RightComponent {
  constructor(public counter: DoubleCounterService) {

  }
}
