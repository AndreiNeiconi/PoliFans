import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-profile',
  standalone: true,
  imports: [FormsModule], // No CommonModule needed for @if/@for
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent {
  // Mapping precisely to your PostgreSQL column names
  profile = {
    id: null,
    date_of_birth: '',
    headline: '',
    bio: '',
    profile_picture_url: '',
    cover_photo_url: '',
    posts_count: 0,
    followers_count: 0,
    following_count: 0,
    skills: '',
    updated_at: ''
  };

  constructor(private router: Router) {}

  /**
   * Handles local device file selection and preview
   */
  onFileChange(event: any, targetField: 'profile_picture_url' | 'cover_photo_url') {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        // Base64 string for preview; in production, you'd upload this to a server
        this.profile[targetField] = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  saveProfile() {
    // Update the timestamp before syncing to PostgreSQL
    this.profile.updated_at = new Date().toISOString();
    
    console.log('Final Data for PostgreSQL:', this.profile);
    
    // Logic: If successful, redirect to the dashboard
    this.router.navigate(['/profile']);
  }

}