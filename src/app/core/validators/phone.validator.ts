import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const phoneRegex = /^[+\d][\d\s\-()]{6,19}$/;
    if (phoneRegex.test(String(value).trim())) {
      return null;
    }
    return { invalidPhone: true };
  };
}
