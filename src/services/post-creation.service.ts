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
  document_id :string | null;
  create_at: string | "null";
  username:string | null;
  profile_picture_id:string | null;
  mime_type:string | null;
  original_name:string | null;
}
@Injectable({
  providedIn: 'root'
})


export class PostCreationService {
  private readonly apiUrl = `${environment.apiUrl}`
  private readonly token = localStorage.getItem('access_token')
  constructor(private http:HttpClient ) { }
  
  create_media_post(post:PostComponent){
   const token = localStorage.getItem('access_token');
    return this.http.post(`${this.apiUrl}/post/media-post`,post,{
      headers: new HttpHeaders({
    Authorization: `Bearer ${token}`,
  }),
    });
  }
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
  deletePost(postId: string) {
  const token = localStorage.getItem('access_token');

  return this.http.delete<void>(
    `${this.apiUrl}/post/${postId}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    }
  );
}
}


