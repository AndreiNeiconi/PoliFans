import { RouterModule, Routes } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FeedComponent } from './features/feed/feed.component';
import { DiscoverComponent } from './features/discover/discover.component';
import { MessagingComponent } from './features/messaging/messaging.component';
import { SubscriptionComponent } from './features/subscription/subscription.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { ProfileComponent } from './features/profile/profile.component';
import { authGuard } from '../services/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'messages', pathMatch: 'full' },
  { path: 'feed', component: FeedComponent, canActivate: [authGuard] },
  { path: 'discover', component: DiscoverComponent, canActivate: [authGuard] },
  { path: 'messages', component: MessagingComponent, canActivate: [authGuard] },
  { path: 'subscription', component: SubscriptionComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'feed', canActivate: [authGuard] },
];

// export const routes :Routes = [
//   { path: '', redirectTo: 'messages', pathMatch: 'full' },
//   { path: 'feed', component: FeedComponent},
//   { path: 'discover', component: DiscoverComponent},
//   { path: 'messages', component: MessagingComponent},
//   { path: 'subscription', component: SubscriptionComponent},
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'profile', component: ProfileComponent},
//   { path: '**', redirectTo: 'feed'},
  
// ];

export class AppRoutingModule {}
