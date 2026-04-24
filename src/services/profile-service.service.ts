import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService { // Corrected name

  constructor(private http: HttpClient) { }
  
  private _isLoggedIn$ = new BehaviorSubject<boolean>(!!localStorage.getItem('access_token'));
  public isLoggedIn$: Observable<boolean> = this._isLoggedIn$.asObservable();

  getUserProfile(): Observable<any> { 
    // 1. Retrieve the token from storage
    const token = localStorage.getItem('access_token');
    console.log('Retrieved token:', token); // Debug log to check token retrieval
    
    // 2. Attach it to the Authorization header
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // 3. Send the GET request to the exact NestJS endpoint, including the headers
    return this.http.get(`${environment.apiUrl}/profiles`, { headers }); 
  }
}