import {Component, Input, AfterViewInit} from '@angular/core';
import {Customer} from '../shared/customer.model';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements AfterViewInit {

  private _customer: Customer;

  public customerModel: FormGroup;

  @Input()
  public set customer(customer: Customer) {
    this._customer = customer;
    for (let key of Object.keys(customer)) {
      this.customerModel.controls[key].setValue(customer[key]);
    }
  }

  public constructor(builder: FormBuilder) {
    this.customerModel = builder.group({
      'firstname': ['', [Validators.required, (c) => {
        const segments = c.value && c.value.split(" ");
        return segments && segments.length > 1 ? { singular: { valid: false }} : null;
      }]],
      'lastnames': ['', Validators.required],
      'street': ['', Validators.required],
      'no': ['', Validators.required],
      'floorLetter': [''],
      'email': [''],
      'phoneHome': ['', [Validators.pattern('^\\d+$')]],
      'phoneWork': [''],
    });
  }

  public ngAfterViewInit() {
    this.customerModel.valueChanges.subscribe((customer => {
      for (let key of Object.keys(customer)) {
        this._customer[key] = customer[key];
      }
    }));
  }
}
