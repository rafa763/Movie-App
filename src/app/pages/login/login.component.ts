import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginPayload } from '../../types/loginPayload.type';
import { AuthService } from '../../http/auth.service';
import { Router } from '@angular/router';
import { authInterceptor } from '../../interceptors/auth.interceptor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  siteKey = '6LefRqApAAAAALirvkdULIslcm4vumrJ2uPgnt9P';
  message!: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.LoginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      recaptcha: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    const login: loginPayload = {
      email: this.LoginForm.value.email,
      password: this.LoginForm.value.password,
    };

    this.authService.login(login).subscribe(
      (res: any) => {
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('refresh_token', res.refresh_token);
        authInterceptor;
        this.router.navigate(['/']);
        console.log(res);
      },
      (err) => {
        this.message = err.message;
        // console.log(err);
      }
    );

    console.log(this.LoginForm.value);
  }
}
