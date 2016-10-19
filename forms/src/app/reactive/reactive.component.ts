import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

class Phones {
  public constructor(public home: string, public work: string) {}
}

class Contact {
  public titulation: 'Hr.' | 'Fru' | 'Frk.';
  public firstname: string;
  public middlename: string;
  public lastname: string;
  public gender: 'male' | 'female';
  public street: string;
  public no: string;
  public floor: string;
  public email: string;
  public phones: Phones;
}

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  public mainGroup: FormGroup;
  public phonesGroup: FormGroup;

  public titulations = [ 'Hr.', 'Fru', 'Frk.'];
  public contact: Contact;

  constructor(builder: FormBuilder) {
    this.contact = new Contact();
    this.contact.titulation = 'Hr.';
    this.contact.firstname = 'Johan';
    this.contact.middlename = 'Sebastian';
    this.contact.lastname = 'Bach';
    this.contact.gender = 'male';
    this.contact.street = 'Musikerstrasse';
    this.contact.no = '124';
    this.contact.floor = 'A';
    this.contact.email = 'etwas@epost.de';
    this.contact.phones = new Phones('12341234', '98769876');

    this.phonesGroup = builder.group({
      'home': new FormControl(this.contact.phones.home),
      'work': new FormControl(this.contact.phones.work)
    });

    this.mainGroup = builder.group({
      'titulation': [this.contact.titulation],
      'firstname': [this.contact.firstname, Validators.required],
      'middlename': [this.contact.middlename],
      'lastname': [this.contact.lastname, Validators.required],
      'gender': [this.contact.gender],
      'street': [this.contact.street],
      'no': [this.contact.no, Validators.pattern('^\\d+$')],
      'floor': [this.contact.floor],
      'email': [this.contact.email],
      'phones': this.phonesGroup
    });
  }
}
