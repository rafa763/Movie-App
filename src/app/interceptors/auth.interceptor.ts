import {
  HttpClient,
  HttpErrorResponse,
  HttpInterceptorFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../http/auth.service';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let token = localStorage.getItem('access_token');
  if (token && !req.url.includes('refresh')) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  const authService = inject(AuthService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      // debugger;
      if (err.status === 401 && !req.url.includes('refresh')) {
        return authService.refreshToken().pipe(
          switchMap((res: any) => {
            localStorage.setItem('access_token', res.access_token);
            console.log('refreshed token', res.access_token);
            return next(
              req.clone({
                setHeaders: {
                  Authorization: `Bearer ${res.access_token}`,
                },
              })
            );
          }),
          catchError((err) => {
            // if refresh token is expired, redirect to login page
            router.navigate(['/']);
            return throwError(() => err);
          })
        );
      }
      return throwError(() => err);
    })
  );
};
