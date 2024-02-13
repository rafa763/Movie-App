import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (state.url === '/auth') {
      if (localStorage.getItem('token') && localStorage.getItem('id')) {
        this.router.navigate(['/']);
        return false;
      } else {
        return true;
      }
    }
    if (!(localStorage.getItem('token') && localStorage.getItem('id'))) {
      this.router.navigate(['/auth']);
      return false;
    }
    return true;
  }
}
