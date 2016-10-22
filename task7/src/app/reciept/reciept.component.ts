import { Component, Input} from '@angular/core';
import { Article } from "../shared/article.model";
import { Customer } from "../shared/customer.model";

@Component({
  selector: 'app-reciept',
  templateUrl: './reciept.component.html',
  styleUrls: ['./reciept.component.css']
})
export class RecieptComponent {

  @Input()
  public articles: Article[];

  @Input()
  public customer: Customer;

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

  public format() {
    if (!this.customer) {
      return "";
    }
    let str = "Navn: ";
    if (this.customer.lastnames) {
      str += `${this.customer.lastnames}, `;
    }
    if (this.customer.firstname) {
      str += this.customer.firstname;
    }
    str += `\nAdresse: `;
    if (this.customer.street && this.customer.no) {
      str += `${this.customer.street} ${this.customer.no}${this.customer.floorLetter || ''}`;
    }
    str += `\nEmail: `;
    if (this.customer.email) {
      str += this.customer.email;
    }
    str += `\nTelefon: `;
    if (this.customer.phoneHome) {
      str += `(hjemme) ${this.customer.phoneHome}`;
    }
    if (this.customer.phoneHome) {
      str += `(arbejde) ${this.customer.phoneWork}`;
    }
    return str;
  }

}
