import { Routes } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FeedComponent } from './features/feed/feed.component';
import { DiscoverComponent } from './features/discover/discover.component';
import { MessagingComponent } from './features/messaging/messaging.component';
import { SubscriptionComponent } from './features/subscription/subscription.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';

export const routes: Routes = [
  // Default to Feed when visiting the home page
  { path: '', redirectTo: 'messages', pathMatch: 'full' },
  { path: 'feed', component: FeedComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'messages', component: MessagingComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // Wildcard for 404
  { path: '**', redirectTo: 'feed' },
];
