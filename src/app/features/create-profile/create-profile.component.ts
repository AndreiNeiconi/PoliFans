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
  currentStep = 1;
  totalSteps = 2;

  // Schema-aligned object
  profileData = {
    headline: '',
    bio: '',
    date_of_birth: '',
    profile_picture_url: '',
    cover_photo_url: '',
    skills: ''
  };

  constructor(private router: Router) {}

  nextStep() { if (this.currentStep < this.totalSteps) this.currentStep++; }
  prevStep() { if (this.currentStep > 1) this.currentStep--; }

  saveProfile() {
    console.log('Sending to PostgreSQL:', this.profileData);
    // After saving, redirect to the actual feed or profile view
    this.router.navigate(['/profile']);
  }
}