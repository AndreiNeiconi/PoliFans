import { Component } from '@angular/core';
import { ProfileService } from '../../../services/profile-service.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [RouterLink]
})
export class ProfileComponent {
  constructor(private profileService: ProfileService) { }
  userData: any = null;

  ngOnInit() {
    
    Promise.resolve(this.loadUserData())
    .then((result) => {
      console.log('User data loaded successfully:', result); // Debug log to check if data is loaded
      
    }).catch((err) => {
      console.error('Error loading user data:', err); // Debug log to check for errors
    });
  }

  loadUserData() {
    this.profileService.getUserProfile().subscribe({
      next: (data) => {
        this.userData = data;
        console.log('User profile data:', this.userData); // Debug log to check received data
      },
      error: (err) => {
        console.error('Error fetching user profile:', err);
      }
    });
  }

  // Mock data for user's past contributions
  userPosts = [
    { id: 1, title: 'Distributed Systems Labs', date: '2 days ago', category: 'Notes' },
    { id: 2, title: 'Angular 19 Project Shell', date: '1 week ago', category: 'Code' },
    { id: 3, title: 'Microservices Architecture', date: 'Mar 12', category: 'Research' },
    { id: 4, title: 'SQL Optimization Guide', date: 'Feb 28', category: 'PDF' }
  ];
  
}