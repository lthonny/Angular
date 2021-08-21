import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUser } from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient
  ) { }

  userRegistration(user: IUser) {
    // return this.http.post<IUser>(('http://localhost:3000/http://localhost:3000/register', user);
  }
}