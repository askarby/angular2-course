import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../shared/customer.model';

@Pipe({
  name: 'customerName'
})
export class CustomerNamePipe implements PipeTransform {

  public transform(customer: Customer): string {
    if (customer.firstname && customer.lastnames) {
      return `${customer.lastnames}, ${customer.firstname}`;
    } else if (customer.firstname) {
      return customer.firstname;
    } else if (customer.lastnames) {
      return customer.lastnames;
    }
    return '<unknown>';
  }

}
