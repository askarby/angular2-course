import { Component, OnChanges, Input} from '@angular/core';
import { Article } from "../shared/article.model";
import { Customer } from "../shared/customer.model";
import { RecieptService } from "./reciept.service";

@Component({
  selector: 'app-reciept',
  templateUrl: './reciept.component.html',
  styleUrls: ['./reciept.component.css']
})
export class RecieptComponent implements OnChanges {

  @Input()
  public articles: Article[];

  @Input()
  public customer: Customer;

  private reciept: string;

  public constructor(private service: RecieptService) {
    this.reciept = '';
  }

  public ngOnChanges() {
    if (this.articles && this.customer) {
      this.reciept = this.service.create(this.customer, this.articles);
    }
  }

}
