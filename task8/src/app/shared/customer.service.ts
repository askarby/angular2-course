import { Injectable } from '@angular/core';
import { Customer } from './customer.model';

const KEY = "customers";

@Injectable()
export class CustomerService {
  private storage: Storage;
  private customers: Customer[];

  constructor() {
    this.storage = localStorage;
    this.customers = JSON.parse(this.storage.getItem(KEY)) ||[];
  }

  public add(customer: Customer) {
    this.customers.push(customer);
    this.storage.setItem(KEY, JSON.stringify(this.customers));
  }

  public getAll(): Customer[] {
    return [ ... this.customers ];
  }

}
