import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IContactForm } from 'src/app/shared/interfaces';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    text: new FormControl(null, [
      Validators.required
    ])
  });


  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit(): void { }


  submit() {
    if (this.form.invalid) {
      return;
    }

    const contactForm: IContactForm = {
      email: this.form.value.email,
      text: this.form.value.text
    }

    this.contactService.PostMessage(contactForm)
      .subscribe(() => this.form.reset())
  }
}
