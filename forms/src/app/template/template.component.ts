import {Component} from '@angular/core';

class Phones {
  public constructor(public home: string, public work: string) {}
}

class Contact {
  public titulation: "Hr." | "Fru" | "Frk.";
  public firstname: string;
  public middlename: string;
  public lastname: string;
  public gender: "male" | "female";
  public street: string;
  public no: string;
  public floor: string;
  public email: string;
  public phones: Phones;
}

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  public titulations = [ "Hr.", "Fru", "Frk."];
  public contact: Contact;

  constructor() {
    this.contact = new Contact();
    this.contact.titulation = "Hr.";
    this.contact.firstname = "Johan";
    this.contact.middlename = "Sebastian";
    this.contact.lastname = "Bach";
    this.contact.gender = "male";
    this.contact.street = "Musikerstrasse";
    this.contact.no = "124";
    this.contact.floor = "A";
    this.contact.email = "etwas@epost.de";
    this.contact.phones = new Phones("12341234", "98769876")
  }
}
