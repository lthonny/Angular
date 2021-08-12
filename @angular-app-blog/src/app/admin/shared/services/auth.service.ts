import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IFbAuthResponse, IUser } from "src/app/shared/interfaces";
import { Observable, of, Subject, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { catchError, tap } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class AuthService {
  public error$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) { }

  // refactor
  get token(): string | null {
    const expDate = localStorage.getItem('fb-token-exp');
    if (expDate !== null) {
      const date = new Date(expDate);

      if (new Date() > date) {
        this.logout();
        return null;
      }
    }

    return localStorage.getItem('fb-token');
  }

  login(user: IUser): Observable<any> {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap((token: any) => this.setToken(token)),
        // tap(() => this.setToken),
        catchError(err => this.handleError(err))
      )
  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private handleError(error: HttpErrorResponse) {
    const { message } = error.error.error;
    console.log(message);

    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('Incorrect email');
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('There is no such email');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Incorrect password');
        break;
    }

    return throwError(message);
  }

  // refactor response type
  private setToken(response: IFbAuthResponse | null) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }
  }
}