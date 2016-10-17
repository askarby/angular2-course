import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit, OnDestroy {
  @Input()
  public label: string;

  ngOnInit() {
    console.log('Initializing!');
  }

  ngOnDestroy() {
    console.log('Destroying!');
  }

}
