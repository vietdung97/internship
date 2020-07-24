import { ValidationErrors, ValidatorFn, AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidator {
    static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
          if (!control.value) {
            // if control is empty return no error
            return null;
          }

          // test the value of the control against the regexp supplied
          const valid = regex.test(control.value);

          // if true, return no error (no error), else return error passed in the second parameter
          return valid ? null : error;
        };
      }
}

export class CustomValidatorsPassword {

  static passwordMatchValidator(formGroup: FormGroup) {
      let valid = true;
      const password = formGroup.value['password'];
      const confirm = formGroup.value['confirm'];

      if ((password === confirm)) {
          valid = true;
      } else {
          formGroup.controls['confirm'].setErrors({ NoPassswordMatch: true });
          valid = false;
      }

      if (valid) { return null; }

      return { passwordMatchValidator: true };
  }
}
