import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class isLoginSercice {
    constructor(private http: HttpClient) { }
  
  private _isLoggedIn$ = new BehaviorSubject<boolean>(!!localStorage.getItem('access_token'));
  public isLoggedIn$: Observable<boolean> = this._isLoggedIn$.asObservable();

  isLogn_func(){
    const token = localStorage.getItem('access_token');
    // Update login state
    this._isLoggedIn$.next(!!token);

    
    // 2. Attach it to the Authorization header
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return headers;
  }
}