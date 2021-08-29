import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ISingIn, ISingUp, IUser, IAuthResponse } from "./interfaces";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  signUp(user: ISingUp) {
    return this.http.post<IAuthResponse>(`${environment.api}/sign_up`, user);
  }

  signIn(user: ISingIn) {
    return this.http.post<IAuthResponse>(`${environment.api}/sign_in`, user);
  }

  logout() {
    // return this.http.get('${environment.api}/logout');
  }
}
