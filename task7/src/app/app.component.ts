import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Customer} from './shared/customer.model';
import {CustomerService} from './shared/customer.service';
import {Article} from './shared/article.model';

declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  public customers: Customer[];
  public customer: Customer;
  public dropdown: Customer;

  public articles: Article[];

  public constructor(private customerService: CustomerService) {
    this.customers = customerService.getAll();
    this.newCustomer();

    this.articles = [
      new Article('Støvkost', 200),
      new Article('Affaldssække, 3 stk', 20),
      new Article('Rengøringsmiddel', 39.95)
    ];
  }

  public ngOnInit() {
    this.customers = this.customerService.getAll();
  }

  public ngAfterViewInit() {
    $(document).foundation();
  }

  public saveCustomer() {
    this.customerService.add(this.customer);
    this.customers = this.customerService.getAll();
    this.dropdown = this.customer;
  }

  public selectCustomer(customer: Customer) {
    this.customer = Object.assign({}, customer);
    this.dropdown = null;
  }

  public newCustomer() {
    this.customer = new Customer();
    this.dropdown = null;
  }
}
