import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
type PostComponent= {
  title:string,
  content:string
}
export interface UserPost {
  id_post: string;
  title: string;
  content: string | null;
  create_at: string | null;
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
  get_post() {
  const token = localStorage.getItem('access_token');

  return this.http.get<UserPost[]>(`${this.apiUrl}/post`, {
    headers: new HttpHeaders({
      Authorization: `Bearer ${token}`,
    }),
  });
  }
  get_feed() {
  const token = localStorage.getItem('access_token');

  return this.http.get<UserPost[]>(`${this.apiUrl}/post/feed`, {
    headers: new HttpHeaders({
      Authorization: `Bearer ${token}`,
    }),
  });
  } 
}


