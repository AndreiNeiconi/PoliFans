import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
// Import your AuthService if you want to use it instead of localStorage directly

export const authGuard: CanActivateFn = (route, state) => {
  // 1. Inject the Router
  const router = inject(Router);
  
  // 2. Check the token
  const token = inject(AuthService).isLoggedIn$; // Or use AuthService if you have a method for this
  
  if (token) {
    return true; // Let them in
  } else {
    router.navigate(['/login']);
    return false; // Prevent them from accessing the route
  }
};