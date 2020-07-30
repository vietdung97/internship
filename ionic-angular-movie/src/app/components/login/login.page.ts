import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { AuthService } from '../../sevices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isSubmitted = false;
  formLogin = new FormGroup({
    email: new FormControl('',
      [Validators.required]
    ),
    password: new FormControl('', [Validators.required])
  })
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.isSubmitted = true;
    this.authService.loggedIn();
    // if (this.formLogin.valid) {
    //   const email = form.value['email'];
    //   const password = form.value['password'];
    //   this.authService.signIn(email, password).then(() => {
    //     this.authService.isLoggedIn.pipe(
    //       map((isLoggedIn: boolean) => {
    //         if(isLoggedIn) this.formLogin.reset();
    //       })
    //     )
    //   });

    // }
    // else {
    //   console.error("Invalid")
    // }
  }

  googleSignIn() {
  }
}
