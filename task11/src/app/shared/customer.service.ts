import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "./rxjs";

@Injectable()
export class CustomerService {
  private readonly URL = 'http://localhost:8080/api/customers';

  constructor(private http: Http) {
  }

  public saveCustomers(customers: Customer[]): Observable<Customer[]> {
    let body = JSON.stringify(customers);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post(this.URL, body, options)
      .map((response) => {
        let output = response.json().data as any[] || [];
        return output.map((each) => {
          return new Customer(each.firstname, each.lastnames, each.street,
                              each.no, each.floorLetter, each.email,
                              each.phoneHome, each.phoneWork);
        });
      })
      .catch((error) => {
        return Observable.throw(`Unable to save data - cause: ${error}`);
      })
  }

  public getAll(): Observable<Customer[]> {
    return this.http
      .get(this.URL)
      .map((response) => {
        let output = response.json() as any[] || [];
        return output.map((each) => {
          return new Customer(each.firstname, each.lastnames, each.street,
                              each.no, each.floorLetter, each.email,
                              each.phoneHome, each.phoneWork);
        });
      })
      .catch((error) => {
        return Observable.throw(`Unable to fetch data - cause: ${error}`);
      });
  }
}
