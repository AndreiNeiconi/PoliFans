import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../../../services/profile-service.service'; // <-- Import the service
import { FileUploadService } from '../../../services/file-upload.service';

@Component({
  selector: 'app-create-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent {
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

  // <-- Inject the ProfileService here
  constructor(private router: Router, private profileService: ProfileService, private fileUploadServices: FileUploadService) { }
  


  // onFileChange(event: any, targetField: 'profile_picture_url' | 'cover_photo_url') {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       this.profile[targetField] = e.target.result;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  // saveProfile() {
  //   this.profile.updated_at = new Date().toISOString();
    
  //   // Send the data to NestJS!
  //   this.profileService.updateUserProfile(this.profile).subscribe({
  //     next: (response) => {
  //       console.log('Profile successfully updated!', response);
  //       this.router.navigate(['/profile']); // Redirect only after success
  //     },
  //     error: (err) => {
  //       console.error('Error updating profile:', err);
  //     }
  //   });
  // }
}