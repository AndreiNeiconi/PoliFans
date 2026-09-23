import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { PostCreationService, UserPost } from '../../../services/post-creation.service';

@Component({
  selector: 'app-feed',
  imports: [RouterLink],
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
}
