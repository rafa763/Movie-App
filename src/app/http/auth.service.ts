import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signupPayload } from '../types/signupPayload.type';
import { API_BASE_URL } from '../consts/api';
import { loginPayload } from '../types/loginPayload.type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(userPayload: loginPayload) {
    return this.http.post(`${API_BASE_URL}/auth/login`, userPayload);
  }

  signup(userPayload: signupPayload) {
    return this.http.post(`${API_BASE_URL}/auth/register`, userPayload);
  }

  refreshToken() {
    return this.http.get(`${API_BASE_URL}/auth/refresh`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('refresh_token')}`,
      },
    });
  }
}
