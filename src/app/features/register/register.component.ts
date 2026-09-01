import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerData = { first_name: '', last_name: '', email: '', password: '' };
  isLoading = false;
  passwordVisible = false; // Controls the eye-icon toggle

  constructor(private router: Router,private authService: AuthService) {}

  get generatedUsername(): string {
    const email = this.registerData.email.trim();

    if (!email.includes('@')) {
      return '';
    }

    return email.split('@')[0];
  }


  onRegister(form: NgForm): void {
  if (form.invalid) return;
  this.isLoading = true;

  const payload = {
    first_name: this.registerData.first_name.trim(),
    last_name: this.registerData.last_name.trim(),
    username: this.generatedUsername,
    email: this.registerData.email.trim(),
    password_hash: this.registerData.password
  };

  this.authService.register(payload).subscribe({
    next: (res) => {
      this.isLoading = false;
      this.router.navigate(['/login']); // Redirect to login after successful registration
    },
    error: (err) => {
      this.isLoading = false;
      alert('Registration failed. Email or username might be taken.');
      console.error(err);
    }
  });
  }
}
