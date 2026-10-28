import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (phoneRegex.test(value)) {
      return null;
    }
    return { invalidPhone: true };
  };
}
