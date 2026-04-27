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
// Directly mapping the PostgreSQL column names
  profile = {
    id: null,
    date_of_birth: '',
    headline: '',
    bio: '',
    profile_picture_url: '',
    cover_photo_url: '',
    skills: '',
    updated_at: ''
  };

  constructor(private router: Router) {}

  saveProfile() {
    // Logic to UPDATE or INSERT into PostgreSQL
    this.profile.updated_at = new Date().toISOString();
    console.log('Syncing to PostgreSQL:', this.profile);
    
    // Redirect to the main feed/profile view after saving
    this.router.navigate(['/profile']);
  }
}