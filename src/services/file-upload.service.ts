import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    formData.append('purpose', 'PROFILE_IMAGE');
    console.log(formData)
    // const params = new HttpParams().set('folder', folder);
    return this.http.post(`${this.apiUrl}/file-upload/upload`, formData);
  }

}
