import { Component, OnInit } from '@angular/core';
import { CounterService } from "../shared/counter.service";
import { DoubleCounterService } from "../shared/double-counter.service";

@Component({
  providers: [
    { provide: CounterService, useClass: DoubleCounterService }
  ],
  selector: 'app-type-replacement',
  templateUrl: './type-replacement.component.html',
  styleUrls: ['./type-replacement.component.css']
})
export class TypeReplacementComponent {
  constructor(public counter: CounterService) {

  }
}
