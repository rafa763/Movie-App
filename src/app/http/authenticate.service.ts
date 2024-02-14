import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponseType } from '../types/auth.type';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor(private http: HttpClient) {}

  authenticate(token: string) {
    return this.http.get<AuthResponseType>(
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
