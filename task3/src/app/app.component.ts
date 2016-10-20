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
  public duster: Article;
  public bags: Article;
  public cleaner: Article;

  public constructor() {
    this.customer = new Customer();

    this.duster = new Article("Støvkost", 200);
    this.bags = new Article("Affaldssække, 3 stk", 20);
    this.cleaner = new Article("Rengøringsmiddel", 39.95);
  }

  ngAfterViewInit() {
    $(document).foundation();
  }

  public get purchases() {
    const format = (target) => {
      return `${target.description}: ${target.price}kr\n`;
    };
    let str = "";
    if (this.duster.selected) {
      str += format(this.duster);
    }
    if (this.bags.selected) {
      str += format(this.bags);
    }
    if (this.cleaner.selected) {
      str += format(this.cleaner);
    }

    return str;
  }

  public get total() {
    let total = 0;
    if (this.duster.selected) {
      total += this.duster.price;
    }
    if (this.bags.selected) {
      total += this.bags.price;
    }
    if (this.cleaner.selected) {
      total += this.cleaner.price;
    }
    return total;
  }

  public log(event) {
    console.log(event);
  }
}
