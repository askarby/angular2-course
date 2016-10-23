import { Component, AfterViewInit } from '@angular/core';
import { DataService } from './data.service';
import { Data } from './data.model';

declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit {
  private persons: Data[];

  public constructor(private service: DataService) {
    this.persons = [];
    service.getData().subscribe((data) => {
      this.persons = data;
    });
  }

  public ngAfterViewInit() {
    $(document).foundation();
    $(document).foundation('topbar', 'reflow');
  }

  public addPerson(name, age) {
    const previous = [ ... this.persons ];
    this.persons.push(new Data(name, age));

    this.service.saveData(this.persons).subscribe((data) => {
      this.persons = data;
    }, (error) => {
      this.persons = previous;
    });
  }
}
