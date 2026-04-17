import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,) { }
  
  private _isLoggedIn$ = new BehaviorSubject<boolean>(!!localStorage.getItem('access_token'));

  public isLoggedIn$: Observable<boolean> = this._isLoggedIn$.asObservable();


  register(userData: any) {
    return this.http.post(`${environment.apiUrl}/users/register`, userData);
  }

  login(credentials: any) {
    return this.http.post(`${environment.apiUrl}/auth/login`, credentials).pipe(
      tap((response: any) => {
        // Save the token to the browser's memory!
        if (response && response.access_token) {
          localStorage.setItem('access_token', response.access_token);
          this._isLoggedIn$.next(true);
        }
      })
    );
  }
  logout() {
    localStorage.removeItem('access_token');
    this._isLoggedIn$.next(false);
  }
}