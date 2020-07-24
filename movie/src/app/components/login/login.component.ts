import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSubmitted = false;
  constructor(private authService: AuthService) { }
  formSignin = new FormGroup({
    email: new FormControl('',
      [Validators.required]
    ),
    password: new FormControl('', [Validators.required])
  })
  ngOnInit(): void {

  }
  get f() { return this.formSignin['controls']; }
  onSubmit(formValue){
    this.isSubmitted = true;
    if (this.formSignin.valid) {
      const email = formValue.value['email'];
      const password = formValue.value['password'];
      this.authService.signIn(email, password).then(() => {
        this.authService.isLoggedIn.pipe(
          map((isLoggedIn: boolean) => {
            if(isLoggedIn) this.formSignin.reset();
          })
        )
      });

    }
    else {
      console.error("Invalid")
    }
  }

  googleSignIn() {
    this.authService.GoogleAuth();
  }

}
