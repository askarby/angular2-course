import { Injectable } from '@angular/core';
import { Article } from '../shared/article.model';
import { Customer } from '../shared/customer.model';

@Injectable()
export class RecieptConsoleService {
  public create(customer: Customer, articles: Article[]) {
    const reciept = `${this.format(customer)}

${this.getPurchases(articles)}
-----------------------
Total: ${this.getTotal(articles)} kr
`;
    console.log(reciept);
    return 'Se kvittering i browserens koonsol!';
  }

  private getPurchases(articles: Article[]) {
    let str = "";
    for (let article of articles) {
      if (article.selected) {
        str += `${article.description}: ${article.price}kr\n`;
      }
    }
    return str;
  }

  private getTotal(articles: Article[]) {
    let total = 0;
    for (let article of articles) {
      if (article.selected) {
        total += article.price;
      }
    }
    return total;
  }

  public format(customer: Customer) {
    let str = "Navn: ";
    if (customer.lastnames) {
      str += `${customer.lastnames}, `;
    }
    if (customer.firstname) {
      str += customer.firstname;
    }
    str += `\nAdresse: `;
    if (customer.street && customer.no) {
      str += `${customer.street} ${customer.no}${customer.floorLetter || ''}`;
    }
    str += `\nEmail: `;
    if (customer.email) {
      str += customer.email;
    }
    str += `\nTelefon: `;
    if (customer.phoneHome) {
      str += `(hjemme) ${customer.phoneHome}`;
    }
    if (customer.phoneHome) {
      str += `(arbejde) ${customer.phoneWork}`;
    }
    return str;
  }
}
