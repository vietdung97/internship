import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSubmitted = false;
  constructor(private authService: AuthService) { }
  formSignin = new FormGroup({
    username: new FormControl('',
      [Validators.required]
    ),
    password: new FormControl('', [Validators.required])
  })
  ngOnInit(): void {

  }
  get f() { return this.formSignin['controls']; }
  onSubmit(){
    this.isSubmitted = true;
    if (this.formSignin.valid) {
      this.authService.login(this.formSignin.value);

    }
  }

}
