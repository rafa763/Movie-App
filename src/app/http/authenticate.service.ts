import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthType } from '../types/auth.type';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor(private http: HttpClient) {}

  authenticate(key: string) {
    return this.http.get<AuthType>(
      'https://api.themoviedb.org/3/authentication',
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${key}`,
        },
      }
    );
  }
}
