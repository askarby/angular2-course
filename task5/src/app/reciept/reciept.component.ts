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

}
