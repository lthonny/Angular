import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router, Params } from "@angular/router";
import {IUser} from "../../shared/interfaces";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  submitted: boolean = false;
  message: string = '';

  form: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6)
    ])
  });


  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const user: IUser = {
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken: true
    }

    console.log('user: ', user);
  }

}
