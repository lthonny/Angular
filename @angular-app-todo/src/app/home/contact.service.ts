import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContactForm } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private api: string = '';

  constructor(
    private http: HttpClient
  ) { }

  PostMessage(input: IContactForm) {
    console.log(input);
    // return this.http.post<IContactForm>('http://localhost:3000/contact', input);
  }
}
