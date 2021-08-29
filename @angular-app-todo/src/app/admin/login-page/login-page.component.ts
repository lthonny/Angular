import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/shared/auth.service';
import { ISingIn } from "../../shared/interfaces";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  signIpSub!: Subscription;
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


  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const user: ISingIn = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.signIpSub = this.authService.signIn(user)
      .subscribe(() => console.log('пользователь авторизован'));

    this.form.reset();
  }

  ngOnDestroy() {
    if (this.signIpSub) {
      this.signIpSub.unsubscribe();
    }
  }
}
