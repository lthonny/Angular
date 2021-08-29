import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
// import {} from ''
import { IUser, ISingUp } from 'src/app/shared/interfaces';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signUpSub!: Subscription;

  submitted: boolean = false;
  message: string = '';

  form: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required
    ]),
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
    // private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const user: ISingUp = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.signUpSub = this.authService.signUp(user)
      .subscribe(() => console.log('пользователь добавлен'));

    this.form.reset();
    // console.log('user: ', user);

    // router.navigate(['/login']);
  }

  ngOnDestroy() {
    if (this.signUpSub) {
      this.signUpSub.unsubscribe();
    }
  }
}
