import { Component, OnInit } from '@angular/core';

const init = new Date();

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  public started: Date;
  public startedMs: number;

  constructor() {
    this.started = init;
    this.startedMs = this.started.getTime();
  }


}
