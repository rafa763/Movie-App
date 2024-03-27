import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AccountResponseType } from '../types/account.type';
import { API_BASE_URL } from '../consts/api';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  getAccount() {
    return this.http.get(`${API_BASE_URL}/auth/account`);
  }

  deleteAccount() {
    return this.http.delete(`${API_BASE_URL}/auth/account`);
  }
}
