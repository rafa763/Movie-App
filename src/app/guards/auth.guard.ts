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
    if (state.url === '/auth') {
      const token = localStorage.getItem('token');

      if (token && localStorage.getItem('id')) {
        this.authenticateService.authenticate(token).subscribe((res: any) => {
          if (res.error) {
            return false;
          }
          this.router.navigate(['/']);
          return true;
        });
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
