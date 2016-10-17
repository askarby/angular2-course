import { Component } from '@angular/core';

declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 - Lifecyklus hooks';

  ngAfterViewInit() {
    $(document).foundation();
    $(document).foundation('topbar', 'reflow');
  }
}
