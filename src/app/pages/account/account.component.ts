import { Component, OnInit } from '@angular/core';

import { AccountService } from '../../http/account.service';
import { accountType } from '../../types/account.type';
import { errorType } from '../../types/error.type';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent implements OnInit {
  details!: accountType;
  error!: errorType;
  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.getAccount().subscribe({
      next: (response: accountType) => {
        this.details = response;
        // console.log('response', response);
      },
      error: (error) => {
        console.log('error', error.error);
        // console.log('error', error.error.status_message);
        this.error = error.error;
      },
    });
  }
}
