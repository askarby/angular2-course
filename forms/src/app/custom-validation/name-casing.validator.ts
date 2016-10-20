import {AbstractControl} from '@angular/forms';

const nameCasingValidator = (control: AbstractControl) => {
  const value = control.value as string;
  const segments = value && value.split(" ") || [];
  if (segments.length > 0) {
    for (let segment of segments) {
      const firstChar = segment.charAt(0);
      if (firstChar !== firstChar.toUpperCase()) {
        return {
          nameCasing: {
            valid: false
          }
        }
      }
    }
  }
  return null;
};

export { nameCasingValidator };
