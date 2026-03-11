import { Component } from '@angular/core';

@Component({
  selector: 'app-subscription',
  standalone: true,
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
})
export class SubscriptionComponent {
  // Mock data for groups
  groups = [
    {
      id: 1,
      name: 'Computer Science 2026',
      description:
        'Official group for first-year CS students. Sharing notes and lab solutions.',
      members: '1.2k',
      posts: '450',
      icon: 'bi-cpu',
      color: '#17187D',
      joined: false,
    },
    {
      id: 2,
      name: 'AI & Machine Learning',
      description:
        'Research discussions, project collaborations, and paper reviews.',
      members: '850',
      posts: '120',
      icon: 'bi-robot',
      color: '#4e51bf',
      joined: true,
    },
    {
      id: 3,
      name: 'Campus Life & Events',
      description:
        'Stay updated with student parties, hackathons, and sports events.',
      members: '3.4k',
      posts: '2.1k',
      icon: 'bi-megaphone',
      color: '#ffc107',
      joined: false,
    },
  ];
}
