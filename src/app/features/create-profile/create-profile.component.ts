import { Component } from '@angular/core';

@Component({
  selector: 'app-create-profile',
  imports: [],
  templateUrl: './create-profile.component.html',
  styleUrl: './create-profile.component.css'
})
export class CreateProfileComponent {
  // Mapping the PostgreSQL schema columns to a mock object
  profileData = {
    id: 1,
    headline: 'Software Engineering Student',
    bio: 'Building the future of student collaboration on PoliFans.',
    profile_picture_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Andrei',
    cover_photo_url: 'https://images.unsplash.com/photo-1557683316-973673baf926', // Fallback cover
    posts_count: 12,
    followers_count: 256,
    following_count: 180,
    skills: ['Angular', 'PostgreSQL', 'TypeScript', 'Bootstrap']
  };

  ngOnInit(): void {
    // Logic to fetch user data based on 'id' would go here
    console.log('Profile loaded for student ID:', this.profileData.id);
  }
}
