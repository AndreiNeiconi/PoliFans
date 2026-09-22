import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

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
    loadPost();
  }
  loadPost(){
    return this.PostCreationService.get_post().subscribe({
      next:(post)=>{
        this.UserPost = post
      },
      error:(error)=>{
        console.log(error)
      }
      

    })
  }
}
