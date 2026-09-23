import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { PostCreationService, UserPost } from '../../../services/post-creation.service';
import { NgOptimizedImage } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-feed',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {
  constructor(private postCreation:PostCreationService){}
  UserPost:UserPost[]=[];



  ngOnInit(){
    this.loadFeed();
  }
  loadFeed(){
    return this.postCreation.get_feed().subscribe({
      next:(post)=>{
        this.UserPost = post
      },
      error:(error)=>{
        console.log(error)
      }
      

    })
  }
  getProfilePictureUrl(imageId: string): string {
  return `${environment.apiUrl}/imag-url-system/${imageId}`;
}
  getRelative_time(timestamp:string){
    const createdAt = new Date(timestamp);
    const createdAtMs = createdAt.getTime();
    const curentTime = Date.now()
    const elapsed_miliseconds = curentTime -createdAtMs;
    const elapsed_second = curentTime/1000;
    const elapsed_minutes = curentTime/60000;
    const elapsed_hours = curentTime/3600000;
    const elapsed_days = curentTime/86400000;
    if(elapsed_miliseconds<1000){
      return 'now';
    }
    else if(elapsed_miliseconds<60000)
    {
      return curentTime - elapsed_second;
    }
    else if(elapsed_miliseconds< 3600000){
      return curentTime - elapsed_minutes
    }
    else if(elapsed_miliseconds< 86400000){
      return curentTime - elapsed_hours
    }
    else if(elapsed_miliseconds> 86400000){
      return curentTime - elapsed_days
    }
    
  }
}
