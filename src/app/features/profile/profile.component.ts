import { Component } from '@angular/core';
import { ProfileService } from '../../../services/profile-service.service';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NgOptimizedImage } from '@angular/common';
import { PostCreationService, UserPost } from '../../../services/post-creation.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [RouterLink, NgOptimizedImage]
})
export class ProfileComponent {
  constructor(private profileService: ProfileService,private postCreationService:PostCreationService) { }
  userData: any = null;
  userPosts: UserPost[] = [];

  ngOnInit() {
   this.loadUserData()
   this.loadPost()

  }

  loadUserData() {

    return this.profileService.getUserProfile().subscribe(
      {
        next: (data: any) => {
          this.userData = data;
          console.log(this.userData);
          console.log(data);
          return this.userData

        },
        error:(e) => console.log(e)
      }
    )
  
  }
  loadPost(){
    return this.postCreationService.get_post().subscribe({
      next:(posts) =>{
        this.userPosts = posts
      },
      error: (err) =>{
        console.error('Could not load posts:', err);
      }
    })
  }

  // Mock data for user's past contributions
  
  
}