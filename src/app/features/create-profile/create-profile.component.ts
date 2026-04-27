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
profile = {
    profile_picture_url: '',
    cover_photo_url: '',
    updated_at: '' // Tracked column from your DB
  };

  /**
   * Captures the file from the device explorer
   */
  onFileChange(event: any, targetField: 'profile_picture_url' | 'cover_photo_url') {
    const file = event.target.files[0];
    if (file) {
      // Create a local preview URL (in a real app, you'd upload this to a server/S3)
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profile[targetField] = e.target.result;
        this.profile.updated_at = new Date().toISOString(); // Update timestamp
      };
      reader.readAsDataURL(file);
    }
  }
}