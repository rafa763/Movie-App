import { Component, OnInit } from '@angular/core';

import { AccountService } from '../../http/account.service';
import { mapAccountInfo } from '../../maps/account.map';
import { accountType } from '../../types/account.type';
import { errorType, defaultErrorType } from '../../types/error.type';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent implements OnInit {
  accountDetails: accountType = {} as accountType;
  error: errorType = defaultErrorType;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.getAccount().subscribe(
      (res: accountType) => {
        if (res) {
          this.accountDetails = mapAccountInfo(res);

          console.log('res', this.accountDetails);
        }
      },
      (error: errorType) => {
        console.log('error', error);
        if (error) {
          this.error = error;
        }
      }
    );
  }
}
