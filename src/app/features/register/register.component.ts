import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerData = { fullName: '', email: '', password: '' };
  isLoading = false;
  passwordVisible = false; // Controls the eye-icon toggle

  constructor(private router: Router) {}

  onRegister(form: NgForm): void {
    if (form.invalid) return;
    this.isLoading = true;

    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/login']);
    }, 2000);
  }
}
