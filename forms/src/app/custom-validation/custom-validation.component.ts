import { Component, OnInit } from '@angular/core';
import {nameCasingValidator} from './name-casing.validator';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.css']
})
export class CustomValidationComponent {
  private modelBased: FormGroup;
  private fullName: string;

  constructor(builder: FormBuilder) {
    this.fullName = 'Anders Bruhn Skarby';

    this.modelBased = builder.group({
      'fullName': [ this.fullName, nameCasingValidator ]
    });
  }

}
