import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthenticateService } from '../../http/authenticate.service';
import { AccountService } from '../../http/account.service';
import { Router } from '@angular/router';
import { authType } from '../../types/auth.type';
import { errorType } from '../../types/error.type';
import { accountType } from '../../types/account.type';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent implements OnInit {
  AuthForm!: FormGroup;
  message!: string;

  constructor(
    private authenticateService: AuthenticateService,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.AuthForm = new FormGroup({
      jwt: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    const jwt = this.AuthForm.value.jwt;
    this.authenticateService.authenticate(jwt).subscribe(
      (res: authType) => {
        if (res.success && res) {
          localStorage.setItem('token', jwt);
          this.accountService.getAccount().subscribe((res: accountType) => {
            // console.log('authRes', res.id);
            localStorage.setItem('id', res.id.toString());
            this.router.navigate(['/']);
          });
        }
      },
      (error: errorType) => {
        // console.log('error', error.error.status_message);
        this.message = error.error.status_message;
      }
    );
  }
}
