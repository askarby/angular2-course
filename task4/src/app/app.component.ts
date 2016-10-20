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

    this.articles = [
      new Article("Støvkost", 200),
      new Article("Affaldssække, 3 stk", 20),
      new Article("Rengøringsmiddel", 39.95)
    ];
  }

  ngAfterViewInit() {
    $(document).foundation();
  }

  public get purchases() {
    let str = "";
    for (let article of this.articles) {
      if (article.selected) {
        str += `${article.description}: ${article.price}kr\n`;
      }
    }
    return str;
  }

  public get total() {
    let total = 0;
    for (let article of this.articles) {
      if (article.selected) {
        total += article.price;
      }
    }
    return total;
  }


  public getPriceColor(subject: Article | number) {
    if (subject instanceof Article) {
      return subject.price > -1 ? "green" : "red";
    }
    return subject > -1 ? "green" : "red";
  }
}
