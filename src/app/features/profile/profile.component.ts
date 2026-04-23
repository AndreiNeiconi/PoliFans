import { Component } from '@angular/core';
import { ProfileService } from '../../../services/profile-service.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private profileService: ProfileService) { }
  userData: any = null;

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    this.profileService.getUserProfile().subscribe({
      next: (data) => {
        this.userData = data;
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