import {Component} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  public value: string;

  constructor() {
    this.value = "Test";
  }
}
