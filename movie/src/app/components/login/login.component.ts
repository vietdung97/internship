import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }
  formSignin = new FormGroup({
    id: new FormControl(''),
    password: new FormControl('')
  })
  ngOnInit(): void {
  }
  onSubmit(){
    if (this.formSignin.valid) {
      this.authService.login(this.formSignin.value);
    }
  }
}
