import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieComponent } from './components/movie/movie.component';
import { AuthComponent } from './pages/authenticate/auth.component';
import { AccountComponent } from './pages/account/account.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieWrapperComponent } from './components/movie-wrapper/movie-wrapper.component';
import { WatchlistWrapperComponent } from './components/watchlist-wrapper/watchlist-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    AuthComponent,
    AccountComponent,
    HeaderComponent,
    HomeComponent,
    MovieWrapperComponent,
    WatchlistWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
