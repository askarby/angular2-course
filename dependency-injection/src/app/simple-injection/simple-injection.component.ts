import { Component, OnInit } from '@angular/core';
import { CounterService } from "../shared/counter.service";

@Component({
  selector: 'app-simple-injection',
  templateUrl: './simple-injection.component.html',
  styleUrls: ['./simple-injection.component.css']
})
export class SimpleInjectionComponent {
  constructor(public counter: CounterService) {

  }

}
