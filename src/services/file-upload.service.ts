import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private readonly apiUrl = `${environment.apiUrl}`
  constructor(private http: HttpClient) { }
  
  uploadFile(formData:FormData): Observable<any> {
  
    const token = localStorage.getItem('access_token');
    return this.http.post(`${this.apiUrl}/file-upload/upload`, formData,{
      headers: new HttpHeaders({
    Authorization: `Bearer ${token}`,
  }),
    });
  }

}
