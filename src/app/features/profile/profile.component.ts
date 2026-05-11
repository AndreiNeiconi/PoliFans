import { Component } from '@angular/core';
import { ProfileService } from '../../../services/profile-service.service';
import { RouterLink } from "@angular/router";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
    this.loadUserData().subscribe(
      {
        next: (data) => this.userData,
        error: (e) => console.log(e)
      }
    );
    

  }

  loadUserData(): Observable<any> {
    return this.profileService.getUserProfile().pipe(
      tap((data: any) => {
        this.userData = data; // Set the userData property with the response
        console.log('User data set in component:', this.userData); // Debug log to check if userData is set
      })
    );
  }

  // Mock data for user's past contributions
  userPosts = [
    { id: 1, title: 'Distributed Systems Labs', date: '2 days ago', category: 'Notes' },
    { id: 2, title: 'Angular 19 Project Shell', date: '1 week ago', category: 'Code' },
    { id: 3, title: 'Microservices Architecture', date: 'Mar 12', category: 'Research' },
    { id: 4, title: 'SQL Optimization Guide', date: 'Feb 28', category: 'PDF' }
  ];
  
}