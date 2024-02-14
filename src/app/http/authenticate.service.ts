import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authType } from '../types/auth.type';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor(private http: HttpClient) {}

  authenticate(token: string) {
    return this.http.get<authType>(
      'https://api.themoviedb.org/3/authentication',
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
}
