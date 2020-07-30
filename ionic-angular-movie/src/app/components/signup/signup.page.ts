import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidatorsPassword } from 'src/app/validators/custom-password';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  formSignup = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    password: new FormControl('', Validators.compose([
      Validators.required,
      // CustomValidator.patternValidator(/\d/, {hasNumber: true}),
      // CustomValidator.patternValidator(/[A-Z]/, {hasCapitalCase: true}),
      // CustomValidator.patternValidator(/[a-z]/, {hasSmallCase: true}),
      // CustomValidator.patternValidator(/[ [!@#$%^&*()_+-={``²}]/, { hasSpecialCharacters: true }),
      Validators.minLength(6),
    ])),
    confirm: new FormControl('', Validators.required)
  }, (formGroup: FormGroup) => {
    return CustomValidatorsPassword.passwordMatchValidator(formGroup);
  });
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {

  }
}
