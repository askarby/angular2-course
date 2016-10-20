import { Component, AfterViewInit } from '@angular/core';
import {Customer} from './shared/customer.model';
import {Article} from './shared/article.model';

declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  public customer: Customer;
  public articles: Article[];

  public constructor() {
    this.customer = new Customer();
    this.customer.firstname = 'Anders';
    this.customer.lastnames = 'Skarby';
    this.customer.street = 'Fantasy road';
    this.customer.no = '42';

    this.articles = [
      new Article('Støvkost', 200),
      new Article('Affaldssække, 3 stk', 20),
      new Article('Rengøringsmiddel', 39.95)
    ];
  }

  ngAfterViewInit() {
    $(document).foundation();
  }
}
