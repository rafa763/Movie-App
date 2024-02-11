import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { accountType } from '../types/account.type';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  getAccount() {
    return this.http.get<accountType>('https://api.themoviedb.org/3/account', {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }
}
