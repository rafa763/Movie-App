import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieComponent } from './components/movie/movie.component';
// import { AuthComponent } from './pages/authenticate/auth.component';
import { AccountComponent } from './pages/account/account.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieWrapperComponent } from './components/movie-wrapper/movie-wrapper.component';
import { WatchlistWrapperComponent } from './components/watchlist-wrapper/watchlist-wrapper.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { NgxCaptchaModule } from 'ngx-captcha';
// import { FormsModule } from '@angular/forms';
import { authInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    // AuthComponent,
    AccountComponent,
    HeaderComponent,
    HomeComponent,
    MovieWrapperComponent,
    WatchlistWrapperComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxCaptchaModule,
    HttpClientModule,
  ],
  providers: [provideHttpClient(withInterceptors([authInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {}
