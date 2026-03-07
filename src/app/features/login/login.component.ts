import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router'; // Import Router
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterLinkActive, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // Inject the router in the constructor
  constructor(private router: Router) {}

  onLogin() {
    // This is where you will call your backend later.
    // For now, we simulate a successful login:
    console.log('Logging in...');
    this.router.navigate(['/feed']);
  }
}
