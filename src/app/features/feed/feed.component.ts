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
  getRelative_time(timestamp: string | null): string {
  if (!timestamp) return '';

  const createdAtMs = new Date(timestamp).getTime();
  if (Number.isNaN(createdAtMs)) return '';

  const elapsedMs = Math.max(0, Date.now() - createdAtMs);

  if (elapsedMs < 60_000) return 'Just now';

  const formatter = new Intl.RelativeTimeFormat('en', {
    numeric: 'always',
  });

  if (elapsedMs < 3_600_000) {
    return formatter.format(-Math.floor(elapsedMs / 60_000), 'minute');
  }

  if (elapsedMs < 86_400_000) {
    return formatter.format(-Math.floor(elapsedMs / 3_600_000), 'hour');
  }

  return formatter.format(-Math.floor(elapsedMs / 86_400_000), 'day');
}
}
