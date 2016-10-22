import { Component, OnInit } from '@angular/core';
import { CounterService } from "../shared/counter.service";

@Component({
  providers: [
    {
      provide: CounterService,
      useFactory: () => {
        const service = new CounterService();
        service.seed(new Date().getTime());
        return service;
      }
    }
  ],
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent {

  constructor(public counter: CounterService) {

  }
}
