import { Component, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit, OnChanges {

  @Input()
  public name: string;

  @Input()
  public age: string;

  public changes: string[];

  constructor() {
    this.changes = [];
  }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    for (let key of Object.keys(changes)) {
      this.changes.push(`${key} changed from '${changes[key].previousValue}' to '${changes[key].currentValue}'`);
    }
  }

}
