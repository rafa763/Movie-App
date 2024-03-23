import { Component, OnInit } from '@angular/core';

import { AccountService } from '../../http/account.service';
// import { mapAccountInfo } from '../../maps/account.map';
import { AccountResponseType } from '../../types/account.type';
import { ErrorType } from '../../types/error.type';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent implements OnInit {
  accountDetails!: AccountResponseType;
  message!: string;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.getAccount().subscribe(
      (res: AccountResponseType) => {
        this.accountDetails = res;
      },
      (err) => {
        if (err) {
          this.message = err.message;
        }
      }
    );
  }

  deleteAccount() {
    this.accountService.deleteAccount().subscribe(
      (res) => {
        console.log('res', res);
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/login';
      },
      (err) => {
        if (err) {
          this.message = err.message;
        }
      }
    );
  }
}
