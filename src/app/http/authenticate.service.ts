import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../consts/api';
// import { AuthResponseType } from '../types/auth.type';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor(private http: HttpClient) {}

  authenticate() {
    return this.http.get(`${API_BASE_URL}/auth/account/type`);
  }
}
