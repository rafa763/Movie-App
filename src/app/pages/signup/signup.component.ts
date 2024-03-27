import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { signupPayload } from '../../types/signupPayload.type';
import { AuthService } from '../../http/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  SignupForm!: FormGroup;
  siteKey = '6LefRqApAAAAALirvkdULIslcm4vumrJ2uPgnt9P';
  message!: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.SignupForm = new FormGroup(
      {
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
        confirmPassword: new FormControl(null, Validators.required),
        dob: new FormControl(null, Validators.required),
        recaptcha: new FormControl(null, Validators.required),
      },
      { validators: this.passwordMatchValidator as ValidatorFn }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null;
    }

    if (password.value === confirmPassword.value) {
      return null;
    } else {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
  }

  onSubmit() {
    const data: signupPayload = {
      email: this.SignupForm.value.email,
      password: this.SignupForm.value.password,
      // make the date does not have time
      dob: new Date(this.SignupForm.value.dob).toISOString().split('T')[0],
    };

    this.authService.signup(data).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log('data', data);
        this.message = err.message;
        console.log(err);
      }
    );
    console.log(this.SignupForm.value);
  }
}
