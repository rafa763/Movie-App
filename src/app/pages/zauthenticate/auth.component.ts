// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

// import { AuthenticateService } from '../../http/authenticate.service';
// import { AccountService } from '../../http/account.service';
// import { Router } from '@angular/router';
// import { AuthResponseType } from '../../types/auth.type';
// import { AccountResponseType } from '../../types/account.type';
// import { ErrorType } from '../../types/error.type';

// @Component({
//   selector: 'app-auth',
//   templateUrl: './auth.component.html',
//   styleUrl: './auth.component.css',
// })
// export class AuthComponent implements OnInit {
//   AuthForm!: FormGroup;
//   message!: ErrorType;

//   constructor(
//     private authenticateService: AuthenticateService,
//     private accountService: AccountService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.AuthForm = new FormGroup({
//       jwt: new FormControl(null, Validators.required),
//     });
//   }

//   onSubmit() {
//     const jwt = this.AuthForm.value.jwt;
//     this.authenticateService.authenticate(jwt).subscribe(
//       (res: AuthResponseType) => {
//         localStorage.setItem('token', jwt);
//         this.accountService
//           .getAccount()
//           .subscribe((res: AccountResponseType) => {
//             // console.log('authRes', res.id);
//             localStorage.setItem('id', res.id.toString());
//             this.router.navigate(['/']);
//           });
//       },
//       (err: AccountResponseType) => {
//         if (err.error) {
//           this.message = err.error;
//         }
//       }
//     );
//   }
// }
