import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

import { AuthenticateService } from '../http/authenticate.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticateService: AuthenticateService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = localStorage.getItem('access_token');

    if (!token) {
      // If there is no access_token in the local storage, redirect to the login page
      this.router.navigate(['/login']);
      return false;
    } else if (state.url === '/login' || state.url === '/signup') {
      // If the user visits the login page and they have an access_token, redirect to the home page
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
