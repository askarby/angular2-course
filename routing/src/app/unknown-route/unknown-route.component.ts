import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unknown-route',
  templateUrl: './unknown-route.component.html',
  styleUrls: ['./unknown-route.component.css']
})
export class UnknownRouteComponent implements OnInit, OnDestroy {
  public url: string;

  constructor(private router: Router) {
    this.url = this.router.url;
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
