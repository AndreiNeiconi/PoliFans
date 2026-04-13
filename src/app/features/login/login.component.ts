import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData = { username: '', password: '' };

  constructor(private router: Router, private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.loginData).subscribe({
      next: () => {
        console.log('Login successful! Token saved.');
        this.router.navigate(['/feed']);
      },
      error: (err) => {
        alert('Invalid credentials!');
        console.error(err);
      }
    });
  }
}