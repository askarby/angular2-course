import {Component, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';
import {Customer} from '../shared/customer.model';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {DawaService} from '../shared/dawa.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements AfterViewInit {
  @Output()
  public customerChange: EventEmitter<Customer>;

  public customerModel: FormGroup;

  public constructor(builder: FormBuilder, private dawa: DawaService) {
    this.customerChange = new EventEmitter<Customer>();

    // Form model
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
    this.customerModel.valueChanges.subscribe((customer) => {
      this.customerChange.emit(customer);
    });
  }

  @Input()
  public set customer(customer: Customer) {
    for (let key of Object.keys(customer)) {
      this.customerModel.controls[key].setValue(customer[key]);
    }
  }

  public autocomplete(value: string) {
    this.dawa.complete(value).subscribe((completion) => {
      this.customerModel.controls['street'].setValue(completion);
    });
  }
}
