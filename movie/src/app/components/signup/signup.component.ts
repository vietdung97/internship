import { OnInit, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
  })
  export class SignupComponent implements OnInit{
      isSubmitted = false;
      constructor() {}
      formSignup = new FormGroup({
        username: new FormControl('',
          [Validators.required]
        ),
        password: new FormControl('', [Validators.required])
      })
      ngOnInit(): void{}
      get f() { return this.formSignup.controls; }
      onSubmit() {
          this.isSubmitted = true;
      }
  }
