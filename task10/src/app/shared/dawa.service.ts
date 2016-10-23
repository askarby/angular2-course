import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "./rxjs";

@Injectable()
export class DawaService {
  private readonly URL = 'https://dawa.aws.dk/vejnavne/autocomplete';

  constructor(private http: Http) {
  }

  public complete(input: string): Observable<string> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('q', input);

    const options = new RequestOptions({
      search: params
    });

    return this.http.get(this.URL, options)
      .map((response) => {
        const suggestions = response.json() as any[];
        return suggestions.length > 0 ? suggestions[0].tekst : input;
      })
      .catch((error) => {
        return Observable.throw('Fejl under søgning af adresse');
      })
  }
}
