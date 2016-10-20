import {Component, Input} from '@angular/core';
import {Customer} from '../shared/customer.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {

  @Input()
  public customer: Customer;

}
