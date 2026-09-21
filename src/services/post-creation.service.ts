import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
type PostComponent= {
  title:string,
  content:string
}
@Injectable({
  providedIn: 'root'
})


export class PostCreationService {
  private readonly apiUrl = `${environment.apiUrl}`
  constructor(private http:HttpClient ) { }
  
  create_post(post:PostComponent){
   const token = localStorage.getItem('access_token');
    return this.http.post(`${this.apiUrl}/post`,post,{
      headers: new HttpHeaders({
    Authorization: `Bearer ${token}`,
  }),
    });
  }
}


