import { OnInit, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CustomValidator, CustomValidatorsPassword } from '../../validators/custom-password';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  [x: string]: any;
  isSubmitted = false;
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }
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

  ngOnInit(): void { }
  get f() { return this.formSignup.controls; }

  onSubmit() {
    this.isSubmitted = true;
    const email = this.formSignup.value['email'];
    const password = this.formSignup.value['password'].toString();
    const confirm = this.formSignup.value['confirm'].toString();
    if (this.formSignup.valid) {
      if (password === confirm) {
        this.authService.signUp(email, password).then(
          () => {
            alert('Sign-up complete');
            this.isSubmitted = false;
            this.formSignup.reset();
            this.router.navigate(['/login']);
          }
        )
      }
    }
  }
}
