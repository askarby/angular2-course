import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';
import { nameCasingValidator } from "./name-casing.validator";

@Directive({
  selector: '[name-casing][ngModel],[name-casing][formControl]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NameCasingDirective), multi: true }
  ]
})
export class NameCasingDirective {
  private validator: Function;

  public constructor() {
    this.validator = nameCasingValidator;
  }

  validate(c: FormControl) {
    return this.validator(c);
  }
}
