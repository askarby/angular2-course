import { Component, OnInit } from '@angular/core';
import { CounterService } from "../shared/counter.service";
import { DoubleCounterService } from "../shared/double-counter.service";

@Component({
  providers: [
    { provide: DoubleCounterService, useClass: CounterService }
  ],
  selector: 'app-left',
  template: `
    <div class="row">
      <h3>useClass</h3>
      <p>
        Værdien er: {{counter.getCount()}}<br>
        <button (click)="counter.increment()">Tæl op</button>
      </p>
    </div>
  `
})
export class LeftComponent {
  constructor(public counter: DoubleCounterService) {

  }
}
