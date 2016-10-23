import { Component, AfterViewInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit {
  private words: string[];

  public constructor() {
    this.words = [];
  }

  public ngAfterViewInit() {
    $(document).foundation();
    $(document).foundation('topbar', 'reflow');
  }

  public addWord(word) {
    this.words.push(word);
  }
}
