import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Data } from './data.model';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private readonly URL = 'http://localhost:8080/api/test';

  constructor(private http: Http) {
  }

  public saveData(data: Data[]): Observable<Data[]> {
    let body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post(this.URL, body, options)
      .map((response) => {
        let output = response.json().data as any[] || [];
        return output.map((each) => {
          return new Data(each.name, each.age);
        });
      })
      .catch((error) => {
        return Observable.throw(`Unable to save data - cause: ${error}`);
      })
  }

  public getData(): Observable<Data[]> {
    return this.http
      .get(this.URL)
      .map((response) => {
        let output = response.json() as any[] || [];
        return output.map((each) => {
          return new Data(each.name, each.age);
        });
      })
      .catch((error) => {
        return Observable.throw(`Unable to fetch data - cause: ${error}`);
      });
  }

}
