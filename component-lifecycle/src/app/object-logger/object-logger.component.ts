import {Component, OnInit, DoCheck, KeyValueDiffer, KeyValueDiffers, OnChanges, SimpleChange} from '@angular/core';
import {Input} from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-object-logger',
  templateUrl: './object-logger.component.html',
  styleUrls: ['./object-logger.component.scss']
})
export class ObjectLoggerComponent implements OnChanges, DoCheck {
  @Input()
  public object: any;
  public changes: string[];

  private differ: KeyValueDiffer;

  constructor(private differs: KeyValueDiffers) {
    this.changes = [];
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    this.differ = this.differs.find({}).create(null);

    for (let key of Object.keys(changes)) {
      this.changes.push(`[Initial update]: ${key} changed from '${JSON.stringify(changes[key].previousValue)}' to '${JSON.stringify(changes[key].currentValue)}'`);
    }
  }

  ngDoCheck() {
    var changes = this.differ.diff(this.object);
    if (changes) {
      changes.forEachChangedItem(r => this.changes.push(`changed ${r.key} from "${r.previousValue}" to "${r.currentValue}"`));
    }
  }

}
