import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.authStatus() === AuthStatus.authenticated) {
    return true;
  }

  // If i want to know what path the user is trying to access
  // and then redirect to that path

  // const url = state.url;
  // localStorage.setItem('url', url);

  router.navigate(['/auth/login']);

  return false;
};
