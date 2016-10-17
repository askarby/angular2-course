import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init-destroy',
  templateUrl: './on-init-destroy.component.html',
  styleUrls: ['./on-init-destroy.component.scss']
})
export class OnInitDestroyComponent implements OnInit {

  public items: string[];

  constructor() {
    this.items = [];
    while (this.items.length < 20) {
      this.addItem();
    }
  }

  ngOnInit() {
  }

  public addItem() {
    this.items.push(this.nextName());
  }

  public removeItem(name) {
    const idx = this.items.indexOf(name);
    if (idx > -1) {
      this.items.splice(idx, 1);
    }
  }

  private nextName(): string {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( let i=0; i < 10; i++ ) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

}
