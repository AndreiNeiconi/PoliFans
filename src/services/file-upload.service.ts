import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private readonly apiUrl = `${environment.apiUrl}`
  constructor(private http: HttpClient,) { }
  
  uploadFile(formData:FormData): Observable<any> {

    console.log('UPLOAD URL:', this.apiUrl);
    // const params = new HttpParams().set('folder', folder);
    return this.http.post(`${this.apiUrl}/file-upload/upload`, formData);
  }

}
