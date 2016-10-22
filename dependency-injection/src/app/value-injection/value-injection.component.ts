import { Component, OnInit } from '@angular/core';
import { CounterService } from "../shared/counter.service";

let value = 1;
const objectLiteral = {
    getCount: () => {
      return value;
    },
    increment: () => {
      value = value + (value * 2);
    }
};

@Component({
  providers: [
    { provide: CounterService, useValue: objectLiteral }
  ],
  selector: 'app-value-injection',
  templateUrl: './value-injection.component.html',
  styleUrls: ['./value-injection.component.css']
})
export class ValueInjectionComponent {

  constructor(public counter: CounterService) {

  }

}
