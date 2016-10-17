import {Component, OnInit, IterableDiffers, IterableDiffer, Input, DoCheck} from '@angular/core';

@Component({
  selector: 'app-list-logger',
  templateUrl: './list-logger.component.html',
  styleUrls: ['./list-logger.component.scss']
})
export class ListLoggerComponent implements DoCheck {
  @Input()
  public list: any[];
  public changes: string[];

  private differ: IterableDiffer;

  constructor(differs: IterableDiffers) {
    this.changes = [];
    this.differ = differs.find([]).create(null);
  }

  ngDoCheck() {
    var changes = this.differ.diff(this.list);
    if (changes) {
      changes.forEachAddedItem(r => this.changes.push('added ' + JSON.stringify(r.item)));
      changes.forEachRemovedItem(r => this.changes.push('removed ' + JSON.stringify(r.item)));
    }
  }
}
