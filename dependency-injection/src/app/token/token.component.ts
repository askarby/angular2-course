import { Component, OnInit } from '@angular/core';
import { CounterService } from "../shared/counter.service";
import { ConfigurableCounterService } from "./configurable-counter.service";
import { COUNTER_CONFIG } from "./counter.config";

@Component({
  providers: [
    {
      provide: COUNTER_CONFIG,
      useValue: { seed: 42 }
    },
    {
      provide: CounterService,
      useClass: ConfigurableCounterService
    }
  ],
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent {

  constructor(public counter: CounterService) {

  }
}
