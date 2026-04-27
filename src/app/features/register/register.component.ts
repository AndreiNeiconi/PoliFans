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
  registerData = { first_name: '', last_name: '', username: '', email: '', password: '' };
  isLoading = false;
  passwordVisible = false; // Controls the eye-icon toggle

  constructor(private router: Router,private authService: AuthService) {}

  onRegister(form: NgForm): void {
  if (form.invalid) return;
  this.isLoading = true;

  // Split "Andrei Ionescu" into first and last name
  // const nameParts = this.registerData.fullName.trim().split(' ');
    const firstName = this.registerData.first_name.trim();  
    const lastName = this.registerData.last_name.trim() || ' '; // Provide a default value if last name is empty

  
  // Generate a username from the email (e.g., andrei.ionescu@studentup.ro -> andrei.ionescu)
  const generatedUsername = this.registerData.email.split('@')[0];

  const payload = {
    first_name: firstName,
    last_name: lastName,
    username: generatedUsername,
    email: this.registerData.email,
    password_hash: this.registerData.password
  };

  this.authService.register(payload).subscribe({
    next: (res) => {
      this.isLoading = false;
      this.router.navigate(['/create-profile']); // Redirect to profile creation after successful registration
    },
    error: (err) => {
      this.isLoading = false;
      alert('Registration failed. Email or username might be taken.');
      console.error(err);
    }
  });
  }
}
