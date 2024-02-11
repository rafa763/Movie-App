import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthenticateService } from '../../http/authenticate.service';
import { Router } from '@angular/router';

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
      () => {
        this.router.navigate(['/account']);
      },
      (error) => {
        this.message = error.error.status_message;
        // console.log('error', error.error.status_message);
      }
    );
  }
}
